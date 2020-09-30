'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    Nationalid: DataTypes.INTEGER,
    Telephone: DataTypes.STRING,
    Firstname: DataTypes.STRING,
    lastName: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Email: DataTypes.STRING,
    Gender: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
    Role: DataTypes.STRING,
    Profileimage: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};