const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/employees", require("./routes/employee.routes"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
module.exports = app;