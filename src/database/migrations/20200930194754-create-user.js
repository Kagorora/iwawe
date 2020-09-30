'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,

        type: Sequelize.INTEGER
      },
      Nationalid: {
                primaryKey: true,
        type: Sequelize.INTEGER
      },
      Telephone: {
        type: Sequelize.STRING
      },
      Firstname: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      Username: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.STRING
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      Role: {
        type: Sequelize.STRING
      },
      Profileimage: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};