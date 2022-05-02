const express = require("express");
const app = express();

app.listen(3065, () => {
  console.log("server running on  port 3065");
});

app.get("/api/ping", (req, res) => {
  res.send({
    success: true,
  });
});

app.get("/api/posts", (request, result) => {
  // const tag = req.query.tag;

  const array = [
    "tech",
    "health",
    //  // "histroy",
    //  // "startups",
    //   //"science",
    //   "design",
    //   "culture",
    //   "politics",
  ];

  const combinedArray = [];
  for (let i = 0; i < array.length; i++) {
    const request = require("request");

    request(
      `https://api.hatchways.io/assessment/blog/posts?tag=${array[i]}`,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          const bodycopy = JSON.parse(body);
          combinedArray.push(...bodycopy.posts);

          //console.log(combinedArray);
          result.send(combinedArray);
        }
      }
    );
  }
});
