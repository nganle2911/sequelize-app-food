import express from "express"; 
import { actionDislike, actionLike, getLikeListByResto, getLikeListByUser } from "../controllers/likeController.js";

const likeRouter = express.Router(); 

likeRouter.post("/action-like", actionLike); 
likeRouter.delete("/action-dislike/:user_id/:res_id", actionDislike); 
likeRouter.get("/like-by-resto/:res_id", getLikeListByResto); 
likeRouter.get("/like-by-user/:user_id", getLikeListByUser); 

export default likeRouter; 
