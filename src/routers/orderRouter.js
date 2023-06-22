import express from "express"; 
import { actionOrder } from "../controllers/orderController.js";

const orderRouter = express.Router(); 

orderRouter.post("/action-order", actionOrder);

export default orderRouter; 