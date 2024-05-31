import users from "../dataBase/Model/users.model.js"
import bcrypt from "bcrypt"
 const emailExsist = async (req, res, next) => {//chick mail found or not to added
     try {
       req.body.password = bcrypt.hashSync(req.body.password, 8);
       const { name, email, password } = req.body;
       const find_Create = await users.findOrCreate({
         where: { email },
         defaults: { name, email, password },
       });

       if (!find_Create[1]) {
         return res.status(409).json({ message: "email already exists" });
       }
       next();
     } catch (error) {
       return res.status(500).json({ error: "An error occurred during sign-up" });
     }
     
}

const login = async(req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await users.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(401).json({ error: "Invalid email" });
      }
      const ispassValid = bcrypt.compareSync(password, user.password);
      if (!ispassValid) {
        return res.status(401).json({ error: "Invalid password" });
      }
      req.yourId=user._id
        next()
    } catch (error) {
      return res.status(500).json({ error: "An error occurred during login" });
    }
}

export { emailExsist, login  };
    




