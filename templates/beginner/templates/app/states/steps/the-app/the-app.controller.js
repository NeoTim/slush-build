;(function(){
  'use strict';
  angular
    .module('app')
    .controller('TheAppCtrl', TheAppCtrl);

    function TheAppCtrl($scope, StatesService){
      StatesService.state(3)
        .then( function ( result ){
          $scope.content = result;

        });

    }
}).call(this);