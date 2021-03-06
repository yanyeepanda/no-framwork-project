root = exports ? this

mainList = document.getElementById('mainList')

httpGet = 
  `function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }`

url="http://marketplace.envato.com/api/edge/popular:themeforest.json"

removeItemForList = 
  ` function(list, itemId){
    for (var n in list){
      if (list[n].id == itemId){
        var index = n;
      }
    };

    list.splice(index, 1);
  }  
  `

root.removeItem = (list, itemId) ->  
  removeItemForList list, itemId; 
  
  mainList.innerHTML = ''
  generateListItems mainList,itemData.thumbnail,itemData.item,itemData.rating,itemData.id for itemData in list


  

generateListItems = (innerContent, imgSrc, itemName, rating, itemId) ->
  if rating == '5.0'
    itemBgColor = 'yellow-bg'
  else
    itemBgColor = 'grey-bg'

  if itemName.length > 50
    displayItemName = itemName.substr(0,50) + "...";
  else
    displayItemName = itemName;

  innerContent.innerHTML += '<div class="item-wrapper"><div class="popular-item ' + itemBgColor + '\">
  <div class="item-logo"><img src=\"'+ imgSrc + '\"></div> 
  <div class="item-description">
      <p class="name">'+ displayItemName + '</p>   
      <p class="rating">'+ rating + '</p>
      <span class="remove-btn" onclick="removeItem(data,\''+itemId+'\')">
        Remove
      </span>
  </div>
  </div></div>'
 

root.fetchData = ->
  mainList.innerHTML = '';
  httpGet url, (res) ->
    root.data = JSON.parse(res).popular.items_last_week
    generateListItems mainList,itemData.thumbnail,itemData.item,itemData.rating,itemData.id for itemData in root.data

    
