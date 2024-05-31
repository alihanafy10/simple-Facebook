import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "mysql://u0rqrvhmq7m2dqi0:W9YQmhKFVGMd1yJ2Uzzb@bxvtf7ytavlwgwg5dkv1-mysql.services.clever-cloud.com:3306/bxvtf7ytavlwgwg5dkv1"
);

export const dbConnection = async () => {
    try {
        await sequelize.sync({ alter: 0, force:0})
        console.log("connect db")
    } catch (err) {
        console.error('error',err)
    }
}