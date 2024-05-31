import comments from "../../../dataBase/Model/comments.model.js";
import posts from "../../../dataBase/Model/posts.model.js"
import users from "../../../dataBase/Model/users.model.js";

const getSpecificUserWithPostAndPostsComments = async (req, res, next) => {
    try {
        let post = await posts.findByPk(req.params.postid)
        if (!post) {
          return res.status(404).json({ message: "No post found" });
        }
        let user = await users.findByPk(req.params.userid);
        if (!user) {
          return res.status(404).json({ message: "No user found" });
        }
    const comment=await comments.findAll({where:{postId:post._id}})
    post=post.toJSON();
    post.postComments = comment
    user=user.toJSON()
    user.userPost = post
    
    res.status(200).json(user)
    } catch (err) {
        console.error(err)
    }
}

const getSpecificPostWithTheOuther = async(req, res, next) => {
    try {
        let post = await posts.findByPk(req.params.id)
        if (!post) {
            return res.status(404).json({ message: 'No post found'});
        }
        const user = await users.findByPk(post?.userId)
        post = post.toJSON()
        post.userPost = user

        res.status(200).json(post);
    } catch (err) { console.error(err) }

    
}

export {
  getSpecificUserWithPostAndPostsComments,
  getSpecificPostWithTheOuther,
};