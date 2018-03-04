var express = require('express');
var app = express();

app.get("/", function (request, response) {
  console.log(request.headers);
  let j = {
    ipaddress: request.headers["x-forwarded-for"].split(",")[0],
    language: request.headers["accept-language"].split(/[,|;]/)[0],
    software: /\((.*)\)/.exec(request.headers["user-agent"])[1]
  };
  response.json(j);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
