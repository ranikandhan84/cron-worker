const https = require("https");

const URL = "https://uzhlavarsandhai.com/api/_magic/cron_job.php";

function callAPI() {
  https.get(URL, (res) => {
    console.log("Called at:", new Date().toISOString());
  }).on("error", (err) => {
    console.error("Error:", err.message);
  });
}

setInterval(callAPI, 60000);

console.log("Worker started...");
