// const router = require('../controllers');
const Project = require('./Project');
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Project, {
    foreignKey: 'project_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Project.hasMany(Comment, {
    foreignKey: 'project_id'
});

module.exports = {User, Project, Comment};