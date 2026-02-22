const https = require("https");

const URL = "https://yourdomain.com/api/run-task.php";

function callAPI() {
  https.get(URL, (res) => {
    console.log("Called at:", new Date().toISOString());
  }).on("error", (err) => {
    console.error("Error:", err.message);
  });
}

setInterval(callAPI, 60000);

console.log("Worker started...");
