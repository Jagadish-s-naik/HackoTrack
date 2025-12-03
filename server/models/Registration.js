import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Registration = sequelize.define('Registration', {
    hackathonId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teamName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    experience: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

export default Registration;
