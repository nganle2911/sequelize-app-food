import express from "express"; 
import { getLikeListByResto, getLikeListByUser } from "../controllers/likeController.js";

const likeRouter = express.Router(); 

likeRouter.get("/like-by-resto/:res_id", getLikeListByResto); 
likeRouter.get("/like-by-user/:user_id", getLikeListByUser); 

export default likeRouter; 
