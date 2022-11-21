require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("sending request", req.method);
  res
    .status(400)
    .json({ success: true, token: process.env.PRIVATE_ACCESS_TOKEN });
});

const port = 5000;

const start = async () => {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
};

start();
