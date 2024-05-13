const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
      return await User.find();
    },
  },
  Mutations: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
  addUser: async (_, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
  },
  updateUser: async (_, args, context) => {
    if (context.user) {
      const user = await User.findByIdAndUpdate(context.user._id, args, {
        new: true,
      });
      return { user };
    }

    throw AuthenticationError;
  },
};

module.exports = resolvers;
