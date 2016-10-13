(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['itemdetails', '$stateParams'];
function ItemDetailController(itemdetails, $stateParams) {
  //console.log ("here");
  var itemDet = this;
  itemDet.itemdetails = itemdetails.data.menu_items;
  itemDet.catSName = $stateParams.catShortName;
//console.log (itemDet.catSName);
}

})();
