const express = require("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./route");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", routes);

mongoose
  .connect("mongodb+srv://ebuka:ebuka@cluster0.7ui4ayg.mongodb.net/crud-app")
  .then(() => {
    app.listen(3000, () => {
      console.log(
        "Server is running on http://localhost:3000, connecttion successful"
      );
    });
  });
