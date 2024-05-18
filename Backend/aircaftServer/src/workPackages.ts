import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from "./database";

export class WorkPackage extends Model {}
WorkPackage.init(
  {
    workPackageId: {
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
    },
    station: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    registration: {
      type: DataTypes.STRING,
    },
    startDateTime: {
      type: DataTypes.DATE,
    },
    endDateTime: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "WorkPackage",
    timestamps: false,
  }
);
