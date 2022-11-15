const { User } = require('../models');
const sequelize = require('../config/connections');

const userdata = [
    {
        name: 'Spencer P.',
        email: 'email@email.com',
        institution: 'Concordia',
        id: 1
    },
    {
        name: 'Janae W',
        email: 'something@email.com',
        institution: 'Ryerson',
        id: 2
    },
    {
        name: 'Sonja I',
        email: 'sonja@email.com',
        institution: 'Carleton',
        id: 3
    },
]

const seedPosts = () => User.bulkCreate(userdata);

module.exports = seedPosts;
