const { Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Users extends Model{
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
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
            // validate:{
            //     is: {
            //         args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            //         msg: 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.',
            //       },
            // },
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
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',

    }
);

module.exports = Users;