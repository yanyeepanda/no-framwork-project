(function() {
  var fetchData, httpGet, url;

  httpGet = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    };

  url = "http://marketplace.envato.com/api/edge/popular:themeforest.json";

  console.log(url);

  // httpGet url, (res) ->
  //   console.log res 
  //   resData = res
  fetchData = function() {
    return httpGet(url, function(res) {
      var data, i, itemData, len, results;
      data = JSON.parse(res).popular.items_last_week;
      results = [];
      for (i = 0, len = data.length; i < len; i++) {
        itemData = data[i];
        // console.log data
        results.push(console.log(itemData));
      }
      return results;
    });
  };

  fetchData();

  // `
// function fetchData() {
//   httpGet(url, function(res){
//     console.log(res);
//     var data = res;
//   })
// }
// `

}).call(this);
