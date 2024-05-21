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
    highestScores: async () => {
      return await User.aggregate([
        {
          $unwind: '$gameData',
        },
        {
          $group: {
            _id: '$_id',
            highestTimeAlive: {
              $max: '$gameData.timeAlive',
            },
            gameData: {
              $push: '$gameData',
            },
            username: { $first: '$username' },
          },
        },
        {
          $project: {
            _id: 1,
            username: 1,
            highestTimeAlive: 1,
          },
        },
        {
          $sort: {
            highestTimeAlive: -1,
          },
        },
        {
          $limit: 10,
        },
      ]);
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
    updateUser: async (_, { username, _id }, context) => {
      try {
        if (context.user && context.user._id === _id) {
          const user = await User.findByIdAndUpdate(
            _id,
            { username },
            {
              new: true,
            }
          );
          if (!user) {
            // console.log(_id);
            return { message: 'User not found!' };
          }

          return user;
        }
        throw AuthenticationError;
      } catch (err) {
        throw AuthenticationError;
      }
    },
    createGameData: async (
      parent,
      { food, energy, happiness, name, timeAlive, userId },
      context
    ) => {
      if (context.user) {
        if (context.user._id === userId) {
          const user = await User.findByIdAndUpdate(
            userId,
            {
              $addToSet: {
                gameData: { food, energy, happiness, name, timeAlive },
              },
            },
            {
              new: true,
            }
          );
          return user;
        }
        throw AuthenticationError;
      }
      throw AuthenticationError;
    },
    deleteUser: async (parent, { _id }, context) => {
      if (context.user && context.user._id === _id) {
        const user = await User.findByIdAndDelete(_id);
        return user;
      }
      throw AuthenticationError;
    },
    deleteGameData: async (_, { userId, _id }, context) => {
      if (context.user && context.user._id === userId) {
        const user = await User.findByIdAndUpdate(
          userId,
          {
            $pull: { gameData: { _id } },
          },
          {
            new: true,
          }
        );
        return user;
      }
      throw AuthenticationError;
    },
    updateGameData: async (
      _,
      { userId, gameId, food, happiness, energy, timeAlive },
      context
    ) => {
      if (context.user && context.user._id === userId) {
        await User.updateOne(
          { _id: userId },
          {
            $set: {
              'gameData.$[i].food': food,
              'gameData.$[i].happiness': happiness,
              'gameData.$[i].energy': energy,
              'gameData.$[i].timeAlive': timeAlive,
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
      }
      return AuthenticationError;
    },
  },
};
module.exports = resolvers;
