//const { response } = require("express");
const database = require("../../connectdb");

module.exports = {
  getAllJobs: function (req, res) {
    var sql = "SELECT * FROM b9oumdvekl5tcfszxzcm.AllJob";
    database.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getOfficeJobs: function (req, res) {
    var sql = "SELECT * FROM b9oumdvekl5tcfszxzcm.AllJob WHERE JobRoleID=1";
    database.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getMarketingJobs: function (req, res) {
    var sql = "SELECT * FROM b9oumdvekl5tcfszxzcm.AllJob WHERE JobRoleID=2";
    database.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getCustomerCareJobs: function (req, res) {
    var sql = "SELECT * FROM b9oumdvekl5tcfszxzcm.AllJob WHERE JobRoleID=3";
    database.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getRestaurantJobs: function (req, res) {
    var sql = "SELECT * FROM b9oumdvekl5tcfszxzcm.AllJob WHERE JobRoleID=4";
    database.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getCensorJobs: function (req, res) {
    var sql = "SELECT * from b9oumdvekl5tcfszxzcm.CensorJob";
    database.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  postJob: function (req, res) {
    const Office = req.body;
    var sql = `INSERT INTO b9oumdvekl5tcfszxzcm.AllJob (CompanyName, HrName, Phone,  JobName, Address, Benefit1, Benefit2, Benefit3, JobRoleID) VALUES ('${Office.CompanyName}','${Office.HrName}','${Office.Phone}','${Office.JobName}', '${Office.Address}', '${Office.Benefit1}', '${Office.Benefit2}', '${Office.Benefit3}', '${Office.JobRoleID}')`;
    database.query(sql, (err, response) => {
      if (err) throw err;
      {
        res.send(Office);
        console.log(Office);
      }
    });
  },
  postCensorJobs: function (req, res) {
    const body = req.body;
    var sql = `INSERT INTO b9oumdvekl5tcfszxzcm.CensorJob (CompanyName, HrName, Phone,  JobName, Address, Benefit1, Benefit2, Benefit3, JobRoleID) VALUES ('${body.CompanyName}','${body.HrName}','${body.Phone}','${body.JobName}', '${body.Address}', '${body.Benefit1}', '${body.Benefit2}', '${body.Benefit3}', '${body.JobRoleID}')`;
    database.query(sql, (err, response) => {
      if (err) throw err;
      {
        res.send(body);
        console.log(body);
      }
    });
  },
};
