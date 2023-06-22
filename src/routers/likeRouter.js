import express from "express"; 
import { actionLike, getLikeListByResto, getLikeListByUser } from "../controllers/likeController.js";

const likeRouter = express.Router(); 

likeRouter.post("/action-like", actionLike); 
likeRouter.get("/like-by-resto/:res_id", getLikeListByResto); 
likeRouter.get("/like-by-user/:user_id", getLikeListByUser); 

export default likeRouter; 
