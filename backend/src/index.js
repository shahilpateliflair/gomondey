const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
var path = require("path");
const connection = require("./routes/connection");
const register = require("./routes/login");
const profileRoutes = require("./routes/profile");
const dataRoutes = require("./routes/data");
const addDataRoutes = require("./routes/add");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/register", register);
app.use("/login", register);
app.use("/profile", profileRoutes);
app.use("/data", dataRoutes);
app.use("/addData", addDataRoutes);

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", async (req, res) => {
  res.send("Hello user! ..... How Are U All? i am shahil patel kem cho....");
});



app.listen(5000, () => {
  console.log("connected to port http://localhost:5000/");
});
