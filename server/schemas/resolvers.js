const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('User not found');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password');
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
      return await User.findByIdAndUpdate(context.user._id, args, {
        new: true,
      });
    }

    throw new AuthenticationError('User not authenticated');
  },
};

module.exports = resolvers;
