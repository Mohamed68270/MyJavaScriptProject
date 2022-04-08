const express = require("express");

const db = require("./db/db");
const routes = require("./routes/routes");
const app = express();

db();
app.use(express.json());
app.use(routes);
app.listen(8080, () => console.log("Connecté au port 8080"));
