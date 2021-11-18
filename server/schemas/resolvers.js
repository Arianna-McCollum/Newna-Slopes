const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Product, Order, Category } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate({path: 'orders.products'});;
    },
    user: async(parent, args, context) => {
      if (context.user){
        const user = await User.findById(context.user._id)
        .populate("order.products");

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
    orders: async () => {
      return Order.find()
      .populate("product");
    },
    categories: async () => {
      return Category.find();
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
