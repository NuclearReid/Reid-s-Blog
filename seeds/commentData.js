const { Comment } = require('../models');
// console.log('blogPostData');
const commentData = [
    {
        commentPost: 'My first comment post!',
    },
    {
        commentPost: 'My second comment post!',
    },
    {
        commentPost: 'im thinking today',
    },
    {
        commentPost: 'yet another iasdfasdfnteresting post',
    },
    {
        commentPost: 'yup',
    },
];
// console.log(blogPostData);
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;