const { blogPost } = require('../models');

const blogPostData = [
    {
        title: 'My first blog post!',
        message: 'look at me writing a blog post!',
    },
    {
        title: 'My second blog post!',
        message: 'i am writing more and more!!!!',
    },
    {
        title: 'im thinking today',
        message: 'such deep thoughts i am having',
    },
    {
        title: 'yet another interesting post',
        message: 'here its being posted for all to see',
    },
    {
        title: 'asdflawjefoawijef',
        message: 'sdafljnasdflnasdflkjnasdfl',
    },
];

const seedBlogPost = () => blogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;