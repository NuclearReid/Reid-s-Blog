const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class blogPost extends Model{
    // I think I'll have to put checks in here to make sure the person is logged in before posting?
}

blogPost.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    // not sure if i'll need them but here they are!
    //hooks{    }
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
    }
);

module.exports = blogPost;

