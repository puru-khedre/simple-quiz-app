require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const port = process.env.PORT || 5000;
const errorHandler = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectToDB = require("./config/db");
const path = require("path");
const cors = require("cors");

connectToDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/hello", require("./routes/helloRoute.js"));

app.get("/api/hello1", require("./controllers/controler2"));

app.get("/api/hello1/:name", (req, res) => {
  let { name } = req.params;
  res.send("hello1 " + name + "!");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started at url http://localhost:${port}`);
});
