const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res)=> {
  return res.send("SERVER IS RUNNING")
})

app.get("/test", (req, res)=> {
  return res.send("This is test route")
})

app.use("/api", router);

const PORT = 8081 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to db");
    console.log("Server is running");
  });
});


// mongodb+srv://anujnemacoding:QGvpqGwe2Wmh9Vpy@cluster0.6iffzgs.mongodb.net/brogan-boots?retryWrites=true&w=majority&appName=Cluster0