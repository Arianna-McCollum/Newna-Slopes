const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Product, Order} = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
          },
          products: async () => {
            return Product.find()
          },
          orders: async () => {
            return Order.find()
          }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return {user, token};
          },
        login: async (parent, { email, password }) => {

            const user = await User.findOne({ email });
            console.log(user)
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          addOrder: async (parent, { products }, context)=>{
            if(context.user){
              const order = new Order({ products });

              await User.findByIdAndUpdate(context.user._id, {$push: {orders: order}})
            }
          },
    }
}

module.exports = resolvers;
