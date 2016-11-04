(function(){
"use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope','SignupService'];
  function SignupController($scope,SignupService) {
    var signupCtrl = this;
    signupCtrl.error = false;
    signupCtrl.showmessage = false;

    signupCtrl.submit = function () {

      var signupuser = $scope.signup.user;
      var promise =  SignupService.submit(signupuser);

      signupCtrl.showmessage = true;
      promise.then ( function(result)
        {
          if( result.status === 500 ) {
           signupCtrl.error = true;

         }
         else {
           signupCtrl.error = false;
         }

      }).catch (function (error) {
          signupCtrl.error = true;
          console.log(error);
        });

    }

}

})();
