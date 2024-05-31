

 const addUser =  (req, res, next) => {
   res.status(201).json({ message: "success" });
}
const signIn = (req, res, next) => {
      res
       .status(200)
       .json({ message: "Login successful", YourId: req.yourId });
 }
export {
    addUser,
    signIn
}