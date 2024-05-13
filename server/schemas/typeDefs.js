const typeDefs = `
type User{
    _id:ID
    username:String
    email:String
    gameData:String
}
type Auth{
    token:ID
    user:User
}


`;
module.exports = typeDefs;
