const { Users } = require('../models');

const userData = [
    {
        userName: 'bobby',
        password: 'Bobby1!',
        email: 'bobby@email.com',
    },
    {
        userName: 'Frank',
        password: 'Frank1!',
        email: 'frank@email.com',
    },
    {
        userName: 'John',
        password: 'John1!',
        email: 'john@email.com',
    },
    {
        userName: 'Tom',
        password: 'Tom1!',
        email: 'tom@email.com',
    },
    {
        userName: 'Prateek',
        password: 'Prateek1!',
        email: 'prateek@email.com',
    },
]

const seedUserData = () => Users.bulkCreate(userData);

module.exports = seedUserData;