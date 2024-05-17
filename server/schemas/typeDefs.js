const typeDefs = `
type User{
    _id: ID
    username: String
    email: String
    gameData: [GameData]
}

type UserScore {
    _id: ID
    username: String
    highestTimeAlive: Int
}

type Auth{
    token: ID
    user: User
}

type GameData {
    _id: ID
    food: Int
    energy: Int
    happiness: Int
    name: String
    createdDate: Float
    lastSaveDate: Float
    timeAlive: Int
}

type Query{
    me(userId:ID!): User
    users: [User]
    highestScores: [UserScore]
}

type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, _id:ID): User
    login(username: String!, password: String!): Auth
    createGameData(food:Int, energy:Int, happiness:Int, name:String!, userId:String!, timeAlive: Int): User
    deleteUser(_id:ID!): User
    deleteGameData(userId:String!, _id:ID!): User
    updateGameData(userId:String!, gameId:ID!, food:Int, energy:Int, happiness:Int, timeAlive:Int): User
}
`;
module.exports = typeDefs;
