const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const helloRoute = require("./controller/hello");

require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

app.use("/api", helloRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
