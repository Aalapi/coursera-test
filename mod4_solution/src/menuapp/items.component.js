(function () {
'use strict';

angular.module('data')
.component('itemList', {
  templateUrl: 'src/menuapp/templates/item.template.html',
  bindings: {
    itemdetails: '<',
    catSName:'<'
  }
});

})();
