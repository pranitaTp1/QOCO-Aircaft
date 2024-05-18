import { DataTypes,Model } from "sequelize";
import { sequelizeInstance } from './database';

export class Flight extends Model {}
Flight.init({
    flightId:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    airline:{
        type: DataTypes.STRING
    },
    registration:{
        type: DataTypes.STRING
    },
    aircraftType:{
        type: DataTypes.STRING
    },
    flightNum:{
        type: DataTypes.STRING
    },
    schedDepTime:{
        type: DataTypes.STRING
    },
    schedArrTime:{
        type: DataTypes.NUMBER
    },
    actualDepTime:{
        type: DataTypes.DATE
    },
    actualArrTime:{
        type: DataTypes.DATE
    },
    estimatedDepTime:{
        type: DataTypes.DATE
    },
    estimatedArrTime:{
        type: DataTypes.DATE
    },
    schedDepStation:{
        type: DataTypes.STRING
    },
    schedArrStation:{
        type: DataTypes.STRING
    },
    depStand:{
        type: DataTypes.STRING
    },
    origDepStand:{
        type: DataTypes.STRING
    }
    },
    {
        sequelize: sequelizeInstance,
        modelName: 'flight',
        timestamps:false
    }

);