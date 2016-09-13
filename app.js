(function () {
'use strict';

  angular.module('myFirstApp', [])
  .controller ('MyFirstController', function($scope){
  $scope.name = "Aalapi";
  $scope.sayHello =function (){
    return "Hello Coursera!";
  };

  });
}) ();
