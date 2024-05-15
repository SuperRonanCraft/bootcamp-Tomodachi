const typeDefs = `
type User{
    _id: ID
    username: String
    email: String
    gameData: [GameData]
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
}

type Query{
    me(userId:ID!): User
    users:[User]
}

type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, _id:ID): User
    login(username: String!, password: String!): Auth
    createGameData(food:Int, energy:Int, happiness:Int, name:String!, userId:String!): User
    deleteUser(_id:ID!): User
    deleteGameData(userId:String!, gameId:ID!): User
    updateGameData(userId:String!, gameId:ID!, food:Int, energy:Int, happiness:Int): User
}
`;
module.exports = typeDefs;
