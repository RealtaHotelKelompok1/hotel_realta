import "dotenv/config";
import express from "express";
import models, {sequelize} from "./models/init-models"
import routes from "./routes/indexRoutes";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

 
app.use(async(req, res, next) => {
    req.context = {models};
    next()
});

app.use(routes)

// app.use("/", (req,res) => {
//     res.send("Halloo Brader")
// })

const dropDatabaseSync = false;
sequelize.sync({force:dropDatabaseSync}).then(() => {
    if(dropDatabaseSync){
        console.log("Database do not drop")
    }
})



app.listen(port, () => { console.log(`Server listening on ${port}`) }); // cek koneksi ke DB
