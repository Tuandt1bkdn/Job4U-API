const MarketingController = require("./controller/MarketingController/MarketingController");
const OfficeController = require("./controller/OfficeController/OfficeController");

module.exports = function (app) {
  // [GET]
  app.route("/savedjob").get(MarketingController.getSavedJob);
  app.route("/censorjob").get(OfficeController.getCensorJobs);
  app.route("/alljob").get(OfficeController.getAllJobs);
  /// [GET] - branch
  app.route("/officejob").get(OfficeController.getOfficeJobs);
  app.route("/marketingjob").get(OfficeController.getMarketingJobs);
  app.route("/ctmcarejob").get(OfficeController.getCustomerCareJobs);
  app.route("/restaurantjob").get(OfficeController.getRestaurantJobs);

  //[POST]
  app.route("/savedjob").post(MarketingController.postSavedJob);
  app.route("/officejob").post(OfficeController.postJob);
  app.route("/censorjob").post(OfficeController.postCensorJobs);

  //[DELETE]
  app.route("/delete/:id").delete(MarketingController.deleteSavedJob);
};
