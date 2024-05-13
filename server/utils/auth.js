const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'itsasecret';
const expiration = '7d';