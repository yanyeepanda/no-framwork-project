(function() {
  var generateListItems, httpGet, mainList, root, url;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  mainList = document.getElementById('mainList');

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

  root.removeItem = function(itemId) {
    var i, itemData, len, ref, results;
    console.log(itemId, root.data);
    var index;
   for (var n in root.data){
      if (root.data[n].id == itemId){
        index = n;
      }
    };

   root.data.splice(index, 1);    
  ;
    mainList.innerHTML = '';
    ref = root.data;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      itemData = ref[i];
      results.push(generateListItems(mainList.innerHTML, itemData.thumbnail, itemData.item, itemData.rating, itemData.id));
    }
    return results;
  };

  generateListItems = function(innerContent, imgSrc, itemName, rating, itemId) {
    return mainList.innerHTML += '<div class="item-wrapper"><div class="popular-item"> <div class="item-logo"><img src=\"' + imgSrc + '\"></div> <div class="item-description"> <p class="name">' + itemName + '</p> <p class="rating">' + rating + '</p> <span class="remove-btn" onclick="removeItem(\'' + itemId + '\')"> Remove </span> </div> </div></div>';
  };

  root.fetchData = function() {
    mainList.innerHTML = '';
    return httpGet(url, function(res) {
      var i, itemData, len, ref, results;
      root.data = JSON.parse(res).popular.items_last_week;
      console.log(root.data);
      ref = root.data;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        itemData = ref[i];
        results.push(generateListItems(mainList.innerHTML, itemData.thumbnail, itemData.item, itemData.rating, itemData.id));
      }
      return results;
    });
  };

}).call(this);
