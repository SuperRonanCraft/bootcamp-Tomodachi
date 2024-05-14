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
    food: Int
    energy: Int
    happiness: Int
    name: String
    createDate:Int
    lastSavedDate:Int
}

type Query{
    me(userId:ID!): User
    users:[User]
}

type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, _id:ID): User
    login(username: String!, password: String!): Auth
    createGameData(food:Int, energy:Int, happiness:Int, name:String!, userId:String!):User
    deleteGameData(_id:ID!):User
}
`;
module.exports = typeDefs;
