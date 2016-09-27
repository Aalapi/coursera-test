(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller ('ToBuyController', ToBuyController)
  .controller ('AlreadyBoughtController', AlreadyBoughtController)
 .service ('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


  function ToBuyController(ShoppingListCheckOffService)
  {
    var BuyCtrl = this;

    BuyCtrl.itemstoBuy = ShoppingListCheckOffService.getItemstoBuy();

    BuyCtrl.ItemBought = function (itemindex) {
        ShoppingListCheckOffService.AddItemsBought(itemindex);
  };
}

  function AlreadyBoughtController(ShoppingListCheckOffService)
  {
    var BoughtCtrl = this;

    BoughtCtrl.itembought = ShoppingListCheckOffService.getItems();


  }

  function ShoppingListCheckOffService ()
  {

    var service = this;
    // List of shopping items
    var itemstoBuy = [];
    var itembought =[];

     service.getItemstoBuy = function () {

          var item = {
            name: 'Cookies',
            quantity: '10'
          };
          itemstoBuy.push(item);

          var item = {
            name: 'Chips',
            quantity: '6'
          };
          itemstoBuy.push(item);

          var item = {
            name: 'Dorritos',
            quantity: '5'
          };
          itemstoBuy.push(item);

          var item = {
            name: 'Popcorn',
            quantity: '1'
          };
          itemstoBuy.push(item);

          var item = {
            name: 'Oreo',
            quantity: '5'
          };
          itemstoBuy.push(item);
        return itemstoBuy;
      };


    service.AddItemsBought = function (itemIdx){

      //adding item to bought array
              var item = {
                name:itemstoBuy[itemIdx].name,
                quantity:itemstoBuy[itemIdx].quantity
              };

        itembought.push(item);

        //removing item from list of buy items
        itemstoBuy.splice(itemIdx, 1);

    };

    service.getItems = function(){
      return itembought;
    };

}

}) ();
