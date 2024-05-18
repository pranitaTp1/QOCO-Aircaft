"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkPackage = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
class WorkPackage extends sequelize_1.Model {
}
exports.WorkPackage = WorkPackage;
WorkPackage.init({
    workPackageId: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    station: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
    },
    registration: {
        type: sequelize_1.DataTypes.STRING,
    },
    startDateTime: {
        type: sequelize_1.DataTypes.DATE,
    },
    endDateTime: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: database_1.sequelizeInstance,
    modelName: "WorkPackage",
    timestamps: false,
});
