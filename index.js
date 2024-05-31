import express from "express";
import { dbConnection } from "./dataBase/connection.js";
import users from "./dataBase/Model/users.model.js";
import posts from "./dataBase/Model/posts.model.js";
import comments from "./dataBase/Model/comments.model.js";
import auth from "./src/modules/auth/auth.routes.js";
import router from "./src/modules/posts/posts.routes.js";
import comment from "./src/modules/comments/comments.routes.js";
import spec from "./src/modules/special endpoint/special.routes.js";
import cors from "cors"

const app = express();
const port = process.env.port ;

app.use(cors())
app.use(express.json());
app.use("/auth", auth);
app.use("/posts", router);
app.use("/comment", comment);
app.use("/special", spec);



dbConnection()
users;
posts;
comments;

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});

