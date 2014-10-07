;(function(){
  'use strict';
  angular
    .module('app')
    .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope, StatesService){

      StatesService.state(1)
        .then( function (result){
          $scope.content = result;

        });
      $scope.intro = 'Welcome'
    }
}).call(this);