require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact-me.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.redirect("/contact");
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port " + process.env.PORT || 3000);
});
