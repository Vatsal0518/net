const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const userRoute = require("./routes/Users")

const authRoute = require("./routes/auth")
const movieRoute =  require("./routes/Movies")
const listRoute =  require("./routes/List")
mongoose.connect("mongodb://127.0.0.1:27017/Netflix").then(()=>{console.log("database connected")}).then((err)=>{console.log(err)});
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/movies",movieRoute)
app.use("/api/lists",listRoute);
app.use(express.json({ limit: '10000mb' })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: '10000mb', extended: true })); // Adjust the limit as needed

// ... your routes and other middleware

// Error handling middleware
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     res.status(400).send('Bad request');
//   } else {
//     next();
//   }
// });
app.listen(8800,()=>{console.log("backend server is running on port 8800")})