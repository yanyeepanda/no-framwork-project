# var HttpClient = function() {
#     this.get = function(aUrl, aCallback) {
#         var anHttpRequest = new XMLHttpRequest();
#         anHttpRequest.onreadystatechange = function() { 
#             if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
#                 aCallback(anHttpRequest.responseText);
#         }

#         anHttpRequest.open( "GET", aUrl, true );            
#         anHttpRequest.send( null );
#     }
# }

# var client = new HttpClient();
# client.get('http://marketplace.envato.com/api/edge/popular:themeforest.json', function(response) {
#     console.log(response);
# });


http = require 'http'

component='frontend'
url="http://marketplace.envato.com/api/edge/popular:themeforest.json"
console.log url
req = http.get url, (res) ->
  status = res.statusCode
  value = if status == 200 then 1 else 0
  if status == 200
    # ...
    console.log "yey!"
    res.on 'data', (chunk) ->
      console.log('body: ' + chunk)
  else
    # ...
    console.log "i'm not worthy"

req.on 'error', ->
  msg = "not available"
  console.log msg
console.log "done!"