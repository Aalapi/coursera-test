(function () {
'use strict';

angular.module('data')
.controller('MenuCategoryController', MenuCategoryController);

MenuCategoryController.$inject = ['items'];
function MenuCategoryController(items) {
  var categories = this;
  categories.items = items;
//console.log (categories.items);
}

})();
