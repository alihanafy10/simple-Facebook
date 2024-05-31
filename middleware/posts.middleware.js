

import posts from "../dataBase/Model/posts.model.js"

const isYourPost = async(req, res, next) => {
    try {
        const id = req.params.id
        const post = await posts.findByPk(id)
        if (!post) {
            return res.status(404).json({ message: "No post found" })
        }
        if (post.userId != req.headers.yourid) {
            return res
                .status(403)
                .json({ message: "You are not authorized to perform this action." });
        }
        next()
    } catch (err) { console.error(err) }
  
}
export{
    isYourPost
}