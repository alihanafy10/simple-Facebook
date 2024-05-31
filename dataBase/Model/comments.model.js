import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import users from "./users.model.js";
import posts from "./posts.model.js";

const comments = sequelize.define(
  "comments",
  {
    _id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING(300),
    },
  },
  {
    timestamps: true,
  }
);
comments.belongsTo(users, {
  onDelete: "cascade",
  onUpdate: "cascade"
});
users.hasMany(comments)


comments.belongsTo(posts, {
  onDelete: "cascade",
  onUpdate: "cascade",
});
posts.hasMany(comments)
console.log(sequelize.models);
export default comments;
