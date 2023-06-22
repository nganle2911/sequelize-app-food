import express from "express";
import { getRateListByResto } from "../controllers/rateController.js";

const rateRouter = express.Router();

rateRouter.get("/rate-by-resto/:res_id", getRateListByResto); 

export default rateRouter; 