const userSeeds = require('./user-seeds');
const projectSeeds = require('./project-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connections');

const seedDb = async () => {
    await sequelize.sync({ force: true });
    await userSeeds();
    await projectSeeds();
    await seedComments();
    process.exit(0);
};

seedDb();