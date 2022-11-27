const { User } = require('../models');
const sequelize = require('../config/connections');

const userdata = [
    {
        name: 'Spencer Pichette',
        email: 'spencer@email.com',
        institution: 'Concordia University',
        id: 1
    },
    {
        name: 'Janae Welsh',
        email: 'janae@email.com',
        institution: 'Ryerson University',
        id: 2
    },
    {
        name: 'Sonja Ilic',
        email: 'sonja@email.com',
        institution: 'Carleton University',
        id: 3
    },
    {
        name: 'John Smith',
        email: 'john@email.com',
        institution: 'University of Toronto',
        id: 4
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        institution: 'University of Ottawa',
        id: 5
    },
]

const seedPosts = () => User.bulkCreate(userdata);

module.exports = seedPosts;
