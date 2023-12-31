import initModels from "../models/init-models.js";
import sequelize from "../models/index.js"; 
import { errorCode, errorRequest, failedCode, successCode } from "../config/response.js";

const models = initModels(sequelize); 

// Handle the action of liking restaurants 
const actionLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let newLike = {
      user_id,
      res_id,
      date_like: new Date(),
    };
    await models.like_res.create(newLike);
    successCode(res, newLike, "Successfully like !");
  } catch {
    failedCode(res, "Error from input data !");
  }
}; 

// Handle the action of disliking restaurants 
const actionDislike = async (req, res) => {
  try {
    let {user_id, res_id} = req.params; 
    let dislike = await models.like_res.destroy({
      where: {
        user_id,
        res_id
      }
    }); 
    successCode(res, dislike, "Successfully dislike !"); 
  } catch {
    errorCode(res, "Error from BE !"); 
  }
};

// Get list of likes by restaurant 
const getLikeListByResto = async (req, res) => {
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
        include: ["like_res"],
        where: {
          res_id,
        },
      });

      // Check if this res_id has any likes
      if (data[0]["like_res"].length === 0) {
        successCode(res, data, "This restaurant doesn't have any likes !");
      } else {
        successCode(
          res,
          data,
          "Successfully get list of likes by restaurant !"
        );
      }
    } else {
      errorRequest(res, "Restaurant not found !");
    }
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
        successCode(res, data, "Successfully get list of likes by user !");
      }

    } else {
      errorRequest(res, "User not found !");
    }
  } catch {
    errorCode(res, "Error from BE !");
  }
};

export {
    actionLike,
    actionDislike,
    getLikeListByResto,
    getLikeListByUser
}
