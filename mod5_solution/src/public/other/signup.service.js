(function(){
"use strict";

  angular.module('public')
.service("SignupService", SignupService);


SignupService.$inject = ['$http', 'ApiPath'];

function SignupService($http, ApiPath)
{

  var service = this;
  var SignupUserData = [];


  service.submit = function (signupuser){

    SignupUserData = [];

    //SignupUserData = signupuser;

    //call to retrieve menu item
       var response = $http({
           method: "GET",
            url: (ApiPath + "/menu_items/" +  signupuser.favdishSN.toUpperCase() + ".json")
          }).then(function successCallback(response) {
            var item = {
              firstname: signupuser.firstname,
              lastname:signupuser.lastname,
              email:signupuser.email,
              phone:signupuser.phone,
              favdishSN: signupuser.favdishSN.toUpperCase(),
              sname:response.data.short_name,
              name: response.data.name,
              description: response.data.description
            }
            SignupUserData.push(item);
           return response;
         }, function errorCallback(error) {
             console.log ("error===" + error);
             return error;
           });


           return response;
  };

  service.getRegistrationData = function (){
//console.log("SignupUserData=="+SignupUserData);
      return SignupUserData;
  }

}


})();
