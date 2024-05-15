import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
//   mutation LoginUser($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const SIGN_UP_USER = gql`
//   mutation signUp($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//         email
//         gameData {
//           food
//           energy
//           happiness
//           name
//         }
//       }
//     }
//   }
// `;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
    }
  }
`;
// check update user

export const LOGIN = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
        gameData {
          _id
          food
          energy
          happiness
          name
          createDate
          lastSavedDate
        }
      }
    }
  }
`;

export const CREATE_GAME_DATA = gql`
  mutation CreateGameData(
    $name: String!
    $userId: String!
    $food: Int
    $energy: Int
    $happiness: Int
  ) {
    createGameData(
      name: $name
      userId: $userId
      food: $food
      energy: $energy
      happiness: $happiness
    ) {
      _id
      username
      email
      gameData {
        _id
        food
        energy
        happiness
        name
        createDate
        lastSavedDate
      }
    }
  }
`;

export const DELETE_GAME_DATA = gql`
  mutation deleteGameData($userId: String!, $id: ID!) {
    deleteGameData(userId: $userId, _id: $id) {
      _id
      email
      username
      gameData {
        _id
        food
        energy
        happiness
        name
        createDate
        lastSavedDate
      }
    }
  }
`;
