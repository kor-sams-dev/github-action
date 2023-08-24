const fetch = require("node-fetch");

const URL =
  "https://hooks.slack.com/services/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";

async function sendHttpRequest() {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      text: "Hello, world!",
    }),
  });

  const responseData = await response.json();
  console.log("Response:", responseData);
}

sendHttpRequest();
