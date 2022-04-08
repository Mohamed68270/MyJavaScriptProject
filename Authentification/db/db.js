const { connect } = require("mongoose");

const dbConnexion = () => {
  connect("mongodb://127.0.0.1:27017/auth")
    .then(() => console.log("mongodb connection established"))
    .catch((err) => console.log("mongodb connection error : " + err));
};

module.exports = dbConnexion;
