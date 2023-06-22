import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";
import { errorCode, successCode } from "../config/response.js";

const models = initModels(sequelize); 

// Add order 
const actionOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let newOrder = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    await models.order.create(newOrder);
    successCode(res, newOrder, "Successfully order !");
  } catch {
    errorCode(res, "Error from BE !");
  }
};

export {
    actionOrder
}; 