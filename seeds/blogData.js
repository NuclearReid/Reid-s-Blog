const { blogPost } = require('../models');
// console.log('blogPostData');
const blogPostData = [
    {
        title: 'My first blog post!',
        content: 'look at me writing a blog post!',
    },
    {
        title: 'My second blog post!',
        content: 'i am writing more and more!!!!',
    },
    {
        title: 'im thinking today',
        content: 'such deep thoughts i am having',
    },
    {
        title: 'yet another interesting post',
        content: 'here its being posted for all to see',
    },
    {
        title: 'asdflawjefoawijef',
        content: 'sdafljnasdflnasdflkjnasdfl',
    },
];
// console.log(blogPostData);
const seedBlogPost = () => blogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;