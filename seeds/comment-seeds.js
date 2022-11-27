const {Comment} = require('../models');
const sequelize = require('../config/connections');

const commentData = [
    {
        body: 'I\'ve been wondering the same thing!!',
        user_id: 2,
        project_id: 1
    },
    {
        body: 'Interesting... Very interesting.',
        user_id: 1,
        project_id: 1
    },
    {
        body: 'I haven\'t been able to sleep since I read your paper. WHAT IS THE ANSWER? Please finish ASAP',
        user_id: 3,
        project_id: 1
    },
    {
        body: 'You are very uninformed and do not have enough sources to support your claim...',
        user_id: 4,
        project_id: 2
    },
    {
        body: 'Seems legit',
        user_id: 5,
        project_id: 3
    },
    {
        body: 'Just do your readings, John...',
        user_id: 5,
        project_id: 4
    },
    {
        body: "I'm going to guess it's A LOT of licks!",
        user_id: 5,
        project_id: 5
    },
    {
        body: 'I would love to collaborate with you on this.',
        user_id: 1,
        project_id: 4
    },
    {
        body: 'But I love media queries!',
        user_id: 5,
        project_id: 7
    },
    {
        body: "I feel like there aren't enough elephants.",
        user_id: 5,
        project_id: 8
    },
    {
        body: "You're off to a great start! I would love to collaborate with you.",
        user_id: 5,
        project_id: 9
    },
    {
        body: 'Why?',
        user_id: 5,
        project_id: 6
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;