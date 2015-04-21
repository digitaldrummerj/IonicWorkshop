var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'))

var result = {
  "success": "true",
  "data": [
    {
      "name": "Josh",
      "title": "Developer"
    },
    {
      "name": "Perry",
      "title": "Developer"
    },
    {
      "name": "Max",
      "title": "CEO"
    }
  ]
};

app.get('/api/endpoint', function(req, res) {
  res.send(result);
  console.log('Got a request from host:', req.hostname, 'Origin:', req.headers.origin);
});

app.get('/', function(request,response) {
    response.send('Hello World');
});

app.listen(app.get('port'), function() {
    console.log('Listening on port:' + app.get('port'));
});
