import { Sequelize } from "sequelize";

export const sequelizeInstance = new Sequelize('test-db','user','pass', {
    dialect:'sqlite',
    host:'./dev.sqlite'
});