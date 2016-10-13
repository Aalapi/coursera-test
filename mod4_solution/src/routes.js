(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // category list page
  .state('menucategories', {
    url: '/menu-categories',
    templateUrl: 'src/menuapp/templates/menucategories.template.html',
    controller: 'MenuCategoryController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // menu detail
  .state('itemDetail', {
    url: '/item-detail/{catShortName}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDet',
    resolve: {
      itemdetails: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              //console.log ("here ===>" + $stateParams.catShortName);
              return MenuDataService.getItemsForCategory($stateParams.catShortName);

              }]
    }
  });

}

})();
