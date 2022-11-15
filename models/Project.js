const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connections.js");

class Project extends Model {}

// set up fields and rules for Project model
Project.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abstract: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    collab_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    project_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ongoing_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    // createdAt: {
    //     type: 'TIMESTAMP',
    //     defaultValue: sequelize.literal(
    //         "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    //     ),
    // }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    underscored: true,
    modelName: "project",
  }
);

module.exports = Project;
