const blogPost = require('./blogPost');
const User = require('./user');
const Comment = require('./comment');


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

User.hasMany(blogPost, {
    foreingkey: 'user_id',
    onDelete: 'CASCADE',
});
// The A.belongsTo(B) association means that a One-To-One relationship exists between A and B,
//  with the foreign key being defined in the source model (A).

// blogPost is the source, User is the target. So the foreignKey should be 'blogPost_id'? 
blogPost.belongsTo(User, {
    // should the foreingKey here be for blogPost?
    foreignKey: 'user_id',
});

blogPost.hasMany(Comment, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(blogPost, {
    foreignKey: 'blogPost_id'
});


module.exports = { blogPost, User, Comment };