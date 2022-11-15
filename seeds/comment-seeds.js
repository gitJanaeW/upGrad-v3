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
        user_id: 1,
        project_id: 1
    },
    {
        body: 'You are very uninformed and do not have enough sources to support your claim...',
        user_id: 1,
        project_id: 2
    },
    {
        body: 'Seems legit',
        user_id: 1,
        project_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;