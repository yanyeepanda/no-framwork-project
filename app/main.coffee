
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

# httpGet url, (res) ->
#   console.log res 
#   resData = res

fetchData = ->
  httpGet url, (res) ->
    data = JSON.parse(res).popular.items_last_week
    # console.log data
    console.log itemData for itemData in data

fetchData()

# `
# function fetchData() {
#   httpGet(url, function(res){
#     console.log(res);
#     var data = res;
#   })
# }
# `


