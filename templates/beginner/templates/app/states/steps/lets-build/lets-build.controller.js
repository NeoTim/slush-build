;(function(){
  'use strict';
  angular
    .module('app')
    .controller('LetsBuildCtrl', LetsBuildCtrl);

    function LetsBuildCtrl($scope, StatesService){
      StatesService.state(4)
        .then( function ( result ){
          $scope.content = result;
        });

    }
}).call(this);