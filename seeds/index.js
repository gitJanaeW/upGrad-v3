const userSeeds = require('./user-seeds');
const projectSeeds = require('./project-seeds');

const sequelize = require('../config/connections');

const seedDb = async () => {
    await sequelize.sync({ force: true });
    await userSeeds();
    await projectSeeds();
    process.exit(0);
};

seedDb();