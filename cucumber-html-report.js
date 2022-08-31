const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "dadosReport", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "electron",
      version: "102",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});