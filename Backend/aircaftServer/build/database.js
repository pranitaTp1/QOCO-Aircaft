"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeInstance = void 0;
const sequelize_1 = require("sequelize");
exports.sequelizeInstance = new sequelize_1.Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.sqlite'
});
