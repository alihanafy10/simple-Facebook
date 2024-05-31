import { Router } from "express";
import * as special from "./special.controller.js";


const spec = Router();

spec.get("/gsuwspapc/:userid/:postid", special.getSpecificUserWithPostAndPostsComments);
spec.get("/gspwta/:id", special.getSpecificPostWithTheOuther);

export default spec;

