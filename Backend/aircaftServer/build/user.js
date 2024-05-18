"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: database_1.sequelizeInstance,
    modelName: 'user',
    timestamps: false
});
