import { Sequelize } from "sequelize";
import config from "../config/config.js"; 

// Initiate sequelize object 
let sequelize = new Sequelize(config.dbDatabase, config.user, config.pass, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
}); 

export default sequelize; 