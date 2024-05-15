import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($userId: ID!) {
    me(userId: $userId) {
      _id
      email
      username
      gameData {
        _id
        createDate
        energy
        food
        happiness
        lastSavedDate
        name
      }
    }
  }
`;
export const QUERY_ALL_USERS = gql`
  query Users {
    users {
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
