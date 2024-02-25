const sequelize = require('../config/connection');
// i'm not sure if this file is not linking up? 
const seedBlogPost = require('./blogData');
const seedUserData = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seedBlogPost();

    await seedUserData();

    process.exit(0);
};

seedAll();