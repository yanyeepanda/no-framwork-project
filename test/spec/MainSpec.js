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
        var body = document.getElementsByTagName("body")[0];

        var titleDiv = UiFramework.div("", "title");
        body.appendChild(titleDiv);
        titleDiv.innerHTML = '<div class="container"><h1>Popular Items</h1></div>'

        var listDiv = UiFramework.div("mainList", "item-lists");
        body.appendChild(listDiv);
     });
    
     it('title div has a right height', function () {
        
        expect(document.getElementsByClassName("title")[0].offsetHeight).toEqual(112);
    });

    it('generate list item in a div', function () {
        var testList = document.getElementById('mainList');
        generateListItems(testList, mockList[0].thumbnail, mockList[0].item, mockList[0].rating, mockList[0].id);
        expect(testList.tagName).toEqual('DIV');  
    });

    it('div of list item has a correct size', function () {
        var testList = document.getElementById('mainList');
        testList.innerHTML = ''
        generateListItems(testList, mockList[0].thumbnail, mockList[0].item, mockList[0].rating, mockList[0].id);
        expect(document.getElementsByClassName("popular-item")[0].clientHeight).toEqual(115);
        expect(document.getElementsByClassName("popular-item")[0].clientWidth).toEqual(400);  
    });

    it('div of list item has correct classes', function () {
        var testList = document.getElementById('mainList');
        testList.innerHTML = ''
        generateListItems(testList, mockList[0].thumbnail, mockList[0].item, mockList[0].rating, mockList[0].id);
        expect(document.getElementsByClassName("popular-item")[0].className).toEqual('popular-item yellow-bg');

        generateListItems(testList, mockList[1].thumbnail, mockList[1].item, mockList[1].rating, mockList[1].id);
        expect(document.getElementsByClassName("popular-item")[1].className).toEqual('popular-item grey-bg');
    });

    it('div of list item has correct contents', function () {
        var testList = document.getElementById('mainList');
        testList.innerHTML = ''
        generateListItems(testList, mockList[1].thumbnail, mockList[1].item, mockList[1].rating, mockList[1].id);
        expect(document.getElementsByClassName("popular-item")[0].lastElementChild.children[0].innerHTML).toEqual('Jupiter - Multi-Purpose Responsive Theme'); 
        expect(document.getElementsByClassName("popular-item")[0].lastElementChild.children[1].innerHTML).toEqual('4.5');  
        
    });

    it('removeItem function should remove a item from list according to its id', function () {            
        removeItemForList(mockList, "2833226");
        
        expect(mockList.length).toEqual(1);
        expect(mockList[0].id).toEqual("5177775");
    });

});