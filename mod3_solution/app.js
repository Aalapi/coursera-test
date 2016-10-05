(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller ('NarrowItDownController', NarrowItDownController)
.service ('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      title: '@title',
      nodatafound:'@nodatafound',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'Ctrl1',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService)
  {
    var Ctrl1 = this;

    Ctrl1.title = "Menu Items";
    Ctrl1.items = "";

    Ctrl1.getMatchedMenuItems = function (searchTerm) {

        Ctrl1.nodatafound = "";
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then (function (response) {

             Ctrl1.items = response;

             if (Ctrl1.items.length == 0)
             {
                 Ctrl1.nodatafound = "Nothing Found!";
             }

            }).catch(function (error) {
              console.log(error);
            })

     };

      Ctrl1.removeItem = function (itemIndex) {
          MenuSearchService.removeItem(itemIndex);
        };
}



MenuSearchService.$inject = ['$http', 'ApiPath']
function MenuSearchService($http, ApiPath) {
  var service = this;
    var founditems=[];

    service.getMatchedMenuItems = function (srchTerm) {

    var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function successCallback(response) {

//console.log("hhhh==" +response.data.menu_items.length);
        founditems.length = 0;

        for (var i=0; i<response.data.menu_items.length;i++)
                {
                //  console.log ("srchTerm" + srchTerm);
                  var desc = response.data.menu_items[i].description;
                //  console.log ("desc==" + desc);

                  if (response.data.menu_items[i].description.indexOf(srchTerm) > 1)
                  {
                    var item = {
                        name: response.data.menu_items[i].name,
                        description: response.data.menu_items[i].description
                      };
                      founditems.push(item);
                  }

                }

        return founditems;

      }, function errorCallback(error) {
          console.log (error);
          return error;
        });

        return response;
      };

      service.removeItem = function (itemIndex) {
          founditems.splice(itemIndex, 1);
        };

}


}) ();
