import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";
import { errorCode, errorRequest, successCode } from "../config/response.js";

const models = initModels(sequelize); 

// Get list of rates by restaurant 
const getRateListByResto = async (req, res) => {
  try {
    let { res_id } = req.params;

    // Check whether res_id exists
    let checkResto = await models.restaurant.findOne({
      where: {
        res_id,
      },
    });

    if (checkResto) {
      let data = await models.restaurant.findAll({
        include: ["rate_res"],
        where: {
          res_id,
        },
      });

      // Check if this restaurant has any ratings
      if (data[0]["rate_res"].length === 0) {
        successCode(res, data, "This restaurant doesn't have any ratings !");
      } else {
        successCode(
          res,
          data,
          "Successfully get list of ratings by restaurant !"
        );
      }
    } else {
      errorRequest(res, "Restaurant not found !");
    }
  } catch {
    errorCode(res, "Error from BE !");
  }
};

export {
    getRateListByResto
}