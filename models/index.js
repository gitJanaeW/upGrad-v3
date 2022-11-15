// import models

// const router = require('../controllers');
const Project = require('./Project');
const User = require('./User');

// create associations
User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//   Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });

//   Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'SET NULL'
//   });

//   User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });

//   Post.hasMany(Comment, {
//     foreignKey: 'post_id'
//   });

module.exports = { User, Project };