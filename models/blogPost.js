const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class blogPost extends Model{
    // I think I'll have to put checks in here to make sure the person is logged in before posting?
}

blogPost.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'I didnt write anything',
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        comment_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'comment',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
    }
);

module.exports = blogPost;

