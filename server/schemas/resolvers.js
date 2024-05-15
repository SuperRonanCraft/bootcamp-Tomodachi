const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, { userId }) => {
      console.log(userId);
      return await User.findById(userId);
    },
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

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
    updateUser: async (_, { username, _id }) => {
      try {
        const user = await User.findByIdAndUpdate(
          _id,
          { username },
          {
            new: true,
          }
        );
        if (!user) {
          throw AuthenticationError;
        }
        return user;
      } catch (err) {
        throw AuthenticationError;
      }
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
    deleteUser: async (parent, { _id }) => {
      const user = await User.findByIdAndDelete(_id);
      return user;
    },
    deleteGameData: async (_, { userId, gameId }) => {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $pull: { gameData: { _id: gameId } },
        },
        {
          new: true,
        }
      );
      return user;
    },
    updateGameData: async (_, { userId, gameId, food, happiness, energy }) => {
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            'gameData.$[i].food': food,
            'gameData.$[i].happiness': happiness,
            'gameData.$[i].energy': energy,
            'gameData.$[i].lastSaveDate': Date.now(),
          },
        },
        {
          arrayFilters: [
            {
              'i._id': gameId,
            },
          ],
        }
      );
      return User.findById(userId);
    },
  },
};
module.exports = resolvers;
