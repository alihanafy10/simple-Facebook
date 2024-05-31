import posts from "../../../dataBase/Model/posts.model.js"

const addpost = async(req, res, next) => {
    const { title, content, userId} = req.body
    await posts.create({ title, content, userId});
    res.status(201).json({ message:'success' });
}

const getposts = async (req, res, next) => {
    const data = await posts.findAll({where:{deleteing:"0"}})
    res.status(200).json({ data })
}
 
const updatepost = async (req, res, next) => {
  const { title, content } = req.body;
    await posts.update({ title, content }, { where: { _id: req.params.id } });
    res
      .status(201)
      .json({ message: "updated" });
}

const deletepost = async (req, res, next) => {
  await posts.update({ deleteing: "1" }, { where: { _id: req.params.id } })
  res.status(201).json({ message: "deleted" });
 }

export { addpost, getposts, updatepost, deletepost };