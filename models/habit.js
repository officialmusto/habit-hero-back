'use strict';
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Habit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Habit.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Habit.init({
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profile',
        key: 'id',
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_completed_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    target: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Habit',
  });
  
  return Habit;
};