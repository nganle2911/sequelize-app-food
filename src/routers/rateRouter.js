import express from "express";
import { actionRate, getRateListByResto, getRateListByUser } from "../controllers/rateController.js";

const rateRouter = express.Router();

rateRouter.post("/action-rate", actionRate); 
rateRouter.get("/rate-by-resto/:res_id", getRateListByResto); 
rateRouter.get("/rate-by-user/:user_id", getRateListByUser); 

export default rateRouter; 