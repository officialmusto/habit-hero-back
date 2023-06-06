'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Habit.init({
    profileId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    frequency: DataTypes.STRING,
    last_completed_date: DataTypes.DATE,
    start_date: DataTypes.DATE,
    target: DataTypes.NUMBER,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Habit',
  });
  return Habit;
};