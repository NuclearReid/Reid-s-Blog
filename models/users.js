const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model{
    // nothing in here yet, i think i'll be checking hashed passes in here
}

Users.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isAlphanumeric: true,
            },
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    msg: 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.',
                  },
            },
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true,
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',

    }
);

module.exports = Users;