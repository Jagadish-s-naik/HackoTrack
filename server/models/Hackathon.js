import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Hackathon = sequelize.define('Hackathon', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tags: {
        type: DataTypes.JSON, // Store tags as JSON array
        allowNull: false,
        defaultValue: []
    },
    prize: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Hackathon;
