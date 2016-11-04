(function(){
"use strict";

  angular.module('public')
  .controller('MyInfoController',MyInfoController);


  MyInfoController.$inject = ['ApiPath', 'regisData'];
  function MyInfoController(ApiPath, regisData) {
   var  $ctrl = this;
  // console.log("ApiPath=="+ApiPath);
$ctrl.basePath = ApiPath;
$ctrl.regisData = regisData;

    };



})();
