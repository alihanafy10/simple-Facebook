import comments from "../dataBase/Model/comments.model.js";


const isYourcomment = async (req, res, next) => {
    try {
      const id = req.params.id;
      const comment = await comments.findByPk(id);
      if (!comment) {
        return res.status(404).json({ message: "No comment found" });
      }
      if (comment.userId != req.headers.yourid) {
        return res
          .status(403)
          .json({ message: "You are not authorized to perform this action." });
      }
      next();
    } catch (err) {
      console.error(err);
    }
};
export { isYourcomment };
