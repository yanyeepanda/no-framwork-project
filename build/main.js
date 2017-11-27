(function() {
  var generateListItems, httpGet, mainList, removeItemForList, root, url;

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

  removeItemForList =  function(list, itemId){
    for (var n in list){
      if (list[n].id == itemId){
        var index = n;
      }
    };

    list.splice(index, 1);
  }  
  ;

  root.removeItem = function(list, itemId) {
    var i, itemData, len, results;
    removeItemForList(list, itemId);
    mainList.innerHTML = '';
    results = [];
    for (i = 0, len = list.length; i < len; i++) {
      itemData = list[i];
      results.push(generateListItems(mainList, itemData.thumbnail, itemData.item, itemData.rating, itemData.id));
    }
    return results;
  };

  generateListItems = function(innerContent, imgSrc, itemName, rating, itemId) {
    var displayItemName, itemBgColor;
    if (rating === '5.0') {
      itemBgColor = 'yellow-bg';
    } else {
      itemBgColor = 'grey-bg';
    }
    if (itemName.length > 50) {
      displayItemName = itemName.substr(0, 50) + "...";
    } else {
      displayItemName = itemName;
    }
    return innerContent.innerHTML += '<div class="item-wrapper"><div class="popular-item ' + itemBgColor + '\"> <div class="item-logo"><img src=\"' + imgSrc + '\"></div> <div class="item-description"> <p class="name">' + displayItemName + '</p> <p class="rating">' + rating + '</p> <span class="remove-btn" onclick="removeItem(data,\'' + itemId + '\')"> Remove </span> </div> </div></div>';
  };

  root.fetchData = function() {
    mainList.innerHTML = '';
    return httpGet(url, function(res) {
      var i, itemData, len, ref, results;
      root.data = JSON.parse(res).popular.items_last_week;
      ref = root.data;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        itemData = ref[i];
        results.push(generateListItems(mainList, itemData.thumbnail, itemData.item, itemData.rating, itemData.id));
      }
      return results;
    });
  };

}).call(this);
