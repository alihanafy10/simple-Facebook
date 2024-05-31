import { Router } from "express";
import * as authin from "./auth.controller.js";
import { emailExsist, login } from "../../../middleware/auth.middelware.js";
const auth = Router();

auth.post("/registration", emailExsist, authin.addUser);
auth.post("/signIn", login, authin.signIn);

export default auth;

