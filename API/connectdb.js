var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
  host: "b9oumdvekl5tcfszxzcm-mysql.services.clever-cloud.com",
  user: "uae5jytt96wegwfu",
  password: "H0rdnZ7e9sQ67EulkpjT",
  database: "b9oumdvekl5tcfszxzcm",
});

module.exports = connection;
