require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const port = process.env.PORT || 5000;
const errorHandler = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectToDB = require("./config/db");
const path = require("path");

connectToDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started at url http://localhost:${port}`);
});
