const express = require("express");
const app = express();

let topArray = [];

app.listen(3065, () => {
  console.log("server running on  port 3065");
});

app.get("/api/ping", (req, res) => {
  res.send({
    success: true,
  });
});

app.get("/api/posts", (request, res) => {
  // const tag = req.query.tag;

  const array = [
    "tech",
    "health",
    "histroy",
    "startups",
    "science",
    "design",
    "culture",
    "politics",
  ];

  let combinedArray = [];
  for (let i = 0; i < array.length; i++) {
    const request = require("request");
    //  const raw=[]
    request(
      `https://api.hatchways.io/assessment/blog/posts?tag=${array[i]}`,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          // console.log(body); // Print the google web page.
          // console.log(JSON.parse(body));

          const bodycopy = JSON.parse(body);
          // console.log(bodycopy);
          combinedArray.push(...bodycopy.posts);
          topArray = [...combinedArray];
          console.log(topArray);
          //.............................................................
          //console.log(combinedArray);
          //  combinedArray = [...combinedArray, { ...bodycopy }];
          // console.log(Array.isArray(bodycopy.posts));
        }
      }
    );
  }
});

// app.get("/api/posts", (req, res) => {
//   let tag = req.query.tag;
//   console.log("tag");
// });
