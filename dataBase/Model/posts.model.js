import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import users from "./users.model.js";

const posts = sequelize.define(
  "posts",
  {
    _id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(40),
    },
    content: {
      type: DataTypes.STRING(200),
    },
    deleteing: {
      type: DataTypes.ENUM("0","1"),
      allowNull: false,
      defaultValue: "0",
    },
  },
  {
    timestamps: true,
  }
);
posts.belongsTo(users, {//البوست الواحد ينتمى ليوزر واحد
    onDelete: 'cascade',
    onUpdate: 'cascade'
})
users.hasMany(posts)//اليوزر ليه اكتر من بوست
console.log(sequelize.models);
export default posts;
