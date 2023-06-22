import initModels from "../models/init-models.js";
import sequelize from "../models/index.js"; 
import { errorCode, errorRequest, successCode } from "../config/response.js";

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
    let { user_id } = req.params;

    // Check whether user_id exists
    let checkUser = await models.user.findOne({
      where: {
        user_id,
      },
    });

    if (checkUser) {
      let data = await models.user.findAll({
        include: ["res_id_restaurants"],
        where: {
          user_id,
        },
      });

      // Check if this user_id likes any restaurants
      if (data[0]["res_id_restaurants"].length === 0) {
        successCode(res, data, "This user doesn't like any restaurants !");
      } else {
        successCode(res, data, "Get list of likes by user successfully !");
      }
      
    } else {
      errorRequest(res, "User not found !");
    }
  } catch {
    errorCode(res, "Error from BE !");
  }
};

export {
    getLikeListByResto,
    getLikeListByUser
}
