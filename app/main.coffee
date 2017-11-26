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

httpGet = `function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }`

url="http://marketplace.envato.com/api/edge/popular:themeforest.json"
console.log url

httpGet url, (res) ->
  console.log res 
  data = res


