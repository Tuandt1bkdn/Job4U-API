const database = require("../../connectdb");
//const connection = require("../connectdatabase")

// function getMarketingJob(req, res) {
//   var sql = "";
//   database.query(sql, (err, response) => {
//     if (err) throw err;
//     res.json(response);
//   });
// }

// export default getMarketingJob;

module.exports = {
  getSavedJob: function (req, res) {
    var sql = "SELECT * FROM b9oumdvekl5tcfszxzcm.SavedJob";
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  postSavedJob: function (req, res) {
    const SavedJob = req.body;
    var sql = `INSERT INTO b9oumdvekl5tcfszxzcm.SavedJob ( CompanyName, JobName, Address, AccountID, idJob) VALUES ('${SavedJob.CompanyName}', '${SavedJob.JobName}', '${SavedJob.Address}', '${SavedJob.AccountID}', '${SavedJob.idJob}')`;
    database.query(sql, (err, response) => {
      if (err) throw err;
      {
        res.send(SavedJob);
        console.log(SavedJob);
      }
    });
  },
  deleteSavedJob: function (req, res) {
    let idSavedJob = req.params.id;
    var sql = `DELETE FROM b9oumdvekl5tcfszxzcm.SavedJob WHERE SavedJob.idSavedJob=${idSavedJob}`;
    database.query(sql, (err, response) => {
      if (err) throw err;
      {
        res.send("Delete successful !!!");
      }
    });
  },
};
