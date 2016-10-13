(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiPath'];
function MenuDataService($http, ApiPath) {
  var service = this;

  service.getAllCategories = function() {

    var response = $http({
        method: "GET",
         url: (ApiPath + "/categories.json"),
      }).then(function successCallback(response) {
        return response;
      }, function errorCallback(error) {
          console.log (error);
          return error;
        });

        return response;

  }

  service.getItemsForCategory = function(categoryShortName){

  console.log ("categoryShortName=" + categoryShortName);
    var response = $http({
        method: "GET",
         url: (ApiPath + "/menu_items.json"),
         params: {
        category: categoryShortName
        }
      }).then(function successCallback(response) {
        return response;
      }, function errorCallback(error) {
          console.log (error);
          return error;
        });


        return response;
  }
}

})();
