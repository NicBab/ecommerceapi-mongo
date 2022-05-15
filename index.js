const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

//connect to mongoose database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch(() => console.log("error connecting to DB"));

app.use(express.json());
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)








//connect to server
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running!");
});
