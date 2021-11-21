const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Product, Order, Category } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate({
        path: 'orders.products',
        populate: 'category'
      });
    },
    user: async(parent, args, context) => {
      if (context.user){
        const user = await User.findById(context.user._id)
        .populate({
          path: 'orders.products',
          populate: 'category'
        });

        // sorts orders by date created
        user.orders.sort((a,b) => b.purchaseData - a.purchaseData)

        return user
      }

      throw new AuthenticationError('Not logged in')
    },
    products: async () => {
      return Product.find()
      .populate("category");
    },
    product: async (parent, {_id}) => {
      return await Product.findById(_id).populate("category")
    },
    categories: async () => {
      return Category.find();
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { user, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }
      throw new AuthenticationError('Not logged in')
    },
  },
};

module.exports = resolvers;
