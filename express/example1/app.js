
var express = require('express');
var app = express();

app.get('/hello.txt', function(request, response){
    response.send('Hello World');
});

app.listen(4567);
console.log('Listening on port 4567');

