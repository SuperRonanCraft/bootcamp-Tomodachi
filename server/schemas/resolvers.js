const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, { userId }) => {
      return await User.findById(userId);
    },
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
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
    createGameData: async (
      parent,
      { food, energy, happiness, name, userId }
    ) => {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: {
            gameData: { food, energy, happiness, name },
          },
        },
        {
          new: true,
        }
      );
      return user;
    },
    deleteGameData: async (parent, { _id }) => {
      const user = await User.findByIdAndDelete(_id);
      return user;
    },
  },
};

module.exports = resolvers;
