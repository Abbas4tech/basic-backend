require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.get("/github", (req, res) => {
  res.json({
    message: "Hello world from Github",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
