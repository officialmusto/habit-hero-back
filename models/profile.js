'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {

    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' })
      Profile.hasMany(models.Habit, { foreignKey: 'id' })
    }
  }

  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Profile',
  })
  return Profile
}

//! THIS MODEL WILL CONTAIN EXTRA ATTRIBUTES (photo) // PROPERTIES NEEDED TO IMPROVE ON PROJECT IN FUTURE.