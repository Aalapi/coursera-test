(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller ('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope)
  {
    $scope.message = "";

    $scope.CheckLunchItems = function()
    {
      if ($scope.lunchmenu == "" || $scope.lunchmenu == null)
      {
        $scope.message = "Please enter data first.";
      }
      else
        {
          var vlunchitems = $scope.lunchmenu;
          //split number of items into array
          var varrayofitems = vlunchitems.split(",");
          //get count of items
          var vNoofItems = varrayofitems.length;

         if (vNoofItems <=3)
         {
          $scope.message = "Enjoy!!";
         }
         else {
           $scope.message = "Too Much!!";
         }

        }
    }
    }


}) ();
