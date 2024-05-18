"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
class Flight extends sequelize_1.Model {
}
exports.Flight = Flight;
Flight.init({
    flightId: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    airline: {
        type: sequelize_1.DataTypes.STRING
    },
    registration: {
        type: sequelize_1.DataTypes.STRING
    },
    aircraftType: {
        type: sequelize_1.DataTypes.STRING
    },
    flightNum: {
        type: sequelize_1.DataTypes.STRING
    },
    schedDepTime: {
        type: sequelize_1.DataTypes.STRING
    },
    schedArrTime: {
        type: sequelize_1.DataTypes.NUMBER
    },
    actualDepTime: {
        type: sequelize_1.DataTypes.DATE
    },
    actualArrTime: {
        type: sequelize_1.DataTypes.DATE
    },
    estimatedDepTime: {
        type: sequelize_1.DataTypes.DATE
    },
    estimatedArrTime: {
        type: sequelize_1.DataTypes.DATE
    },
    schedDepStation: {
        type: sequelize_1.DataTypes.STRING
    },
    schedArrStation: {
        type: sequelize_1.DataTypes.STRING
    },
    depStand: {
        type: sequelize_1.DataTypes.STRING
    },
    origDepStand: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: database_1.sequelizeInstance,
    modelName: 'flight',
    timestamps: false
});
