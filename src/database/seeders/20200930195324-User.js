const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        Nationalid: 12367,
        Telephone: '078000000',
        Firstname: 'super',
        lastName: 'admin',
        Username: 'superadmin',
        Password: bcrypt.hashSync('Gitore@1', 10),
        Email: 'iwaweltd@gmail.com',
        Gender: 'male',
        isVerified: true,
        Role: 'superadmin',
        Profileimage: '',
        Address: 'Kigali',
        createdAt: moment.utc().format(),
        updatedAt: moment.utc().format(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

// database/seeds/xxxx-User.js