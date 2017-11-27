describe("Main Js", function() {

    var UiFramework = (function() {
    
        function div(id, cssClass) {
          var element = document.createElement("div");
          element.id = id;
          element.classList.add(cssClass);
          return element;
        }
    
        return {
          div: div
        }
      })();

      var mockList = [
        {
            "id": "2833226",
            "item": "Avada | Responsive Multi-Purpose Theme",
            "url": "https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226",
            "user": "ThemeFusion",
            "thumbnail": "https://s3.envato.com/files/237422065/Thumbnail_Sale.jpg",
            "sales": "3998",
            "rating": "5.0",
            "rating_decimal": "4.77",
            "cost": "39.00",
            "uploaded_on": "Thu Aug 16 01:28:46 +1000 2012",
            "last_update": "Fri Nov 24 00:18:44 +1100 2017",
            "tags": "blog, business, clean, corporate, creative, ecommerce, modern, multipurpose, one page, photography, portfolio, responsive, retina, woocommerce, wordpress",
            "category": "wordpress/corporate",
            "live_preview_url": "https://s3.envato.com/files/237422066/screenshots/00_preview.__large_preview.jpg"
        },
        {
            "id": "5177775",
            "item": "Jupiter - Multi-Purpose Responsive Theme",
            "url": "https://themeforest.net/item/jupiter-multipurpose-responsive-theme/5177775",
            "user": "artbees",
            "thumbnail": "https://s3.envato.com/files/236668205/thumbnail.png",
            "sales": "2132",
            "rating": "4.5",
            "rating_decimal": "4.73",
            "cost": "29.00",
            "uploaded_on": "Mon Jul 15 13:26:02 +1000 2013",
            "last_update": "Sat Nov 18 00:31:56 +1100 2017",
            "tags": "business, clean, corporate, creative, mega menu, multi purpose, one page, page builder, parallax, portfolio, responsive, seo, woocommerce, wordpress theme, wpml",
            "category": "wordpress/corporate",
            "live_preview_url": "https://s3.envato.com/files/236668206/preview.__large_preview.jpg"
        }];

    beforeAll(function() {
            // document.body.innerHTML += 
            // '<div onload=onload="fetchData()"><div class="top-bar"><div class="container"><img class="logo" src="../_assets/logo.png"> <div class="welcome"> <span>Welcome back, <strong>joeblogs54!</strong> </span> </div> </div> </div> <div class="title"> <div class="container"> <h1> Popular Items </h1> </div> </div> <div class="content"> <div class="container"> <div class="grab-them"> Here are this week’s most popular themes & templates from <span class="txt-blue">ThemeForest</span>! Grab ‘em while they’re hot! </div> <div class="item-lists" id="mainList"></div> </div> </div></div>';
            // var mainList = document.getElementById('mainList');
            // console.log(mainList);

        var body = document.getElementsByTagName("body")[0];
        // var titleDiv = UiFramework.div("", "title");
        // body.appendChild(titleDiv);

        var listDiv = UiFramework.div("mainList", "item-lists");
        body.appendChild(listDiv);
        console.log(body);
     });
    
   
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });


    it('generate list item in a div', function () {
        var testList = document.getElementById('mainList');
        generateListItems(testList, mockList[0].thumbnail, mockList[0].item, mockList[0].rating, mockList[0].id);
        var expectResult = '<div class="item-wrapper"><div class="popular-item yellow-bg"> <div class="item-logo"><img src=\"https://s3.envato.com/files/237422065/Thumbnail_Sale.jpg\"></div> <div class="item-description"> <p class="name">Avada | Responsive Multi-Purpose Theme</p> <p class="rating">5.0</p> <span class="remove-btn" onclick="removeItem(data,\'2833226\')"> Remove </span> </div> </div></div>'
        
        expect(testList.innerHTML).toEqual(expectResult);
        
    })

    it('removeItem function should remove a item from list according to its id', function () {
        // var testList = document.getElementById('mainList');
        
            
        removeItemForList(mockList, "2833226");
        
        expect(mockList.length).toEqual(1);
        expect(mockList[0].id).toEqual("5177775");
    });

});