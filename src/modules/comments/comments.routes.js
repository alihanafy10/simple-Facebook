import { Router } from "express";
import * as comment from "./comments.controller.js"
import { isYourcomment } from "../../../middleware/comment.middleware.js";


const router = Router();


router.post("/comment/:id", comment.addcomment);
router.get("/comment/:id", comment.getSComments);
router.put("/comment/:id", isYourcomment, comment.updateComment);
router.delete("/comment/:id", isYourcomment, comment.deleteComment);

export default router;
