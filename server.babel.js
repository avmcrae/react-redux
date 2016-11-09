const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const path = require('path');

// serve static assets
app.use(express.static(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);