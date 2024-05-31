import { and, where } from "sequelize";
import comments from "../../../dataBase/Model/comments.model.js";

const addcomment = async(req, res, next) => {
    try {
        const {content}=req.body;
    const id = req.params.id;
    await comments.create({content,userId:req.headers.yourid,postId:id})
    res.status(201).json({message:"Comment created successfully"})
    } catch (err) {
        console.error(err);
   }
}

const getSComments = async (req, res, next) => {
    try {
      const data = await comments.findAll({ where: { postId: req.params.id } });
      res.status(200).json({ data });
    } catch (err) {
      console.error(err);
    }
}
 
const updateComment = async (req, res, next) => {
    try {
      const { content } = req.body;
      const data = await comments.update(
        { content },
        { where: { _id: req.params.id } }
      );
      res
        .status(201)
        .json({ message: "Comment updated successfully", dataUpdated: data });
    } catch (err) {
      console.error(err);
    }
 }
const deleteComment = async (req, res, next) => {
    try {
      const data = await comments.destroy({ where: { _id: req.params.id } });
      res
        .status(201)
        .json({ message: "Comment deleted successfully", dataDeleted: data });
    } catch (err) {
      console.error(err);
    }
 }
export { addcomment, getSComments, updateComment,deleteComment };