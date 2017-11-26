(function() {
  // var HttpClient = function() {
  //     this.get = function(aUrl, aCallback) {
  //         var anHttpRequest = new XMLHttpRequest();
  //         anHttpRequest.onreadystatechange = function() { 
  //             if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
  //                 aCallback(anHttpRequest.responseText);
  //         }

  //         anHttpRequest.open( "GET", aUrl, true );            
  //         anHttpRequest.send( null );
  //     }
  // }

  // var client = new HttpClient();
  // client.get('http://marketplace.envato.com/api/edge/popular:themeforest.json', function(response) {
  //     console.log(response);
  // });
  var component, http, req, url;

  http = require('http');

  component = 'frontend';

  url = "http://marketplace.envato.com/api/edge/popular:themeforest.json";

  console.log(url);

  req = http.get(url, function(res) {
    var status, value;
    status = res.statusCode;
    value = status === 200 ? 1 : 0;
    if (status === 200) {
      // ...
      console.log("yey!");
      return res.on('data', function(chunk) {
        return console.log('body: ' + chunk);
      });
    } else {
      // ...
      return console.log("i'm not worthy");
    }
  });

  req.on('error', function() {
    var msg;
    msg = "not available";
    return console.log(msg);
  });

  console.log("done!");

}).call(this);
