require("dotenv").config();
const fs = require("fs");
const express = require("express");
const https = require("https");
const cors = require("cors");

const routes = require("./src/routes");

const app = express();

const PORT = process.env.PORT;
const secureOptions = {
  key: fs.readFileSync("./Keys/private_key.pem", "utf-8"), // need to pass path for secret key amd certificate file
  cert: fs.readFileSync("./Keys/certificate.pem", "utf-8"),
};

// middlerwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.use("/", routes);

// Start HTTPS server
https
  .createServer(secureOptions, app)
  .listen(PORT, () => console.log(`Secure Server is listening on ${PORT}`));
