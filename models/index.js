const blogPost = require('./blogPost');
const User = require('./user');
const Comment = require('./comment');


User.hasMany(blogPost, {
    foreingkey: 'user_id',
});

blogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

blogPost.hasMany(Comment, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(blogPost, {
    foreignKey: 'blogPost_id'
});

Comment.belongsTo(User,{
    foreignKey: 'user_id'
});

module.exports = { blogPost, User, Comment };


// -- associations with User model --
// a user has many comments

// a comment belongs to a user

// a user has many blog posts

// a blog post belongs to a user

// -- associations with blogPost model --

// a comment belongs to one blogPost

// a blogPost has many comment

// look into to see if .belongsToMany would be appropriate?
//    would this work for comments because multiple users can comment on a blog post?

// Notes on making these connections
// User is the source model, blogPost is the target model