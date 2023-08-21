import express from "express"; 
import cors from "cors"; 
import rootRouter from "./routers/rootRouter.js";

const app = express(); 

app.use(express.json()); 
app.use(cors()); 

const port = process.env.PORT || 3306; 
app.listen(port, () => {
    console.log("App is running"); 
}); 

app.use("/api", rootRouter); 