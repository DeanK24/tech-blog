const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Dean2',
    email: 'dean3@gmail.com',
    password: 'password123'
  },
  {
    username: 'Sammy4',
    email: 'Dallas3@gmail.com',
    password: 'password123'
  },
  {
    username: 'Kyle',
    email: 'kclocks@gmail.com',
    password: 'password123'
  },
  {
    username: 'Devin12',
    email: 'denivA@gmail.com',
    password: 'password123'
  },
  {
    username: 'brando',
    email: 'ufcfighter@gmail.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
