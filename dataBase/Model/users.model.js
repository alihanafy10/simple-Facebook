import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const users = sequelize.define('users', {
    _id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull:false
    }
}, {
   timestamps:true
})
console.log(sequelize.models)
export default users