import { Router } from "express";
import * as posts from "./posts.controller.js";
import * as middelware from "../../../middleware/posts.middleware.js";
const router = Router();

router.post("/post",posts.addpost );
router.get("/post",posts.getposts );
router.put("/post/:id", middelware.isYourPost, posts.updatepost);
router.put("/deletePost/:id", middelware.isYourPost, posts.deletepost);

export default router;

