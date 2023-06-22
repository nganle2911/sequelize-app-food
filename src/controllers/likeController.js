import initModels from "../models/init-models.js";
import sequelize from "../models/index.js"; 
import { errorCode, successCode } from "../config/response.js";

const models = initModels(sequelize); 

// Get list of likes by restaurant 
const getLikeListByResto = async (req, res) => {
  try {
    let { res_id } = req.params;
    let data = await models.restaurant.findAll({
      include: ["like_res"],
      where: {
        res_id
      }
    });
    successCode(res, data, "Get list of likes by restaurant successfully !");
  } catch {
    errorCode(res, "Error from BE !");
  }
};

// Get list of likes by user 
const getLikeListByUser = async (req, res) => {
  try {
    let {user_id} = req.params; 

    // Check whether user_id exists 
    let checkUser = await models.user.findOne({
        where: {
            user_id
        }
    }); 

    if (checkUser) {
        let data = await models.user.findAll({
            include: ["res_id_restaurants"]
        }); 
        successCode(res, data, "Get list of likes by user successfully !"); 
    } else {
        successCode(res, data, )
    }
  } catch {
    
  }
};

export {
    getLikeListByResto,
    getLikeListByUser
}
