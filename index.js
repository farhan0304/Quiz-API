const express= require("express");
const connectdb = require("./db/connectDb.js")
const QuestionBank = require("./model/question.model.js")
const {router} = require("./routes/routes.js");


require("dotenv").config();

const app = express();
const dburl = process.env.MONGO_URI;
connectdb(dburl)
.then(()=>console.log("MongoDB connected Successfully"))
.catch((err)=>console.log("MongoDB failed to connect: ",err));

const Port= process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/quiz',router);


app.listen(Port,()=>{
    console.log("Server is started at PORT: ",Port)
})