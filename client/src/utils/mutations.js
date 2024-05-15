import { gql } from '@apollo/client';
export const UPDATE_GAMEDATA = gql`
  mutation UpdateGameData(
    $userId: String!
    $gameId: ID!
    $food: Int
    $energy: Int
    $happiness: Int
  ) {
    updateGameData(
      userId: $userId
      gameId: $gameId
      food: $food
      energy: $energy
      happiness: $happiness
    ) {
      _id
      email
      username
      gameData {
        _id
        food
        energy
        happiness
        name
        lastSaveDate
        createdDate
      }
    }
  }
`;
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
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
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
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser($username: String, $id: ID) {
    updateUser(username: $username, _id: $id) {
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
        createdDate
        lastSaveDate
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
