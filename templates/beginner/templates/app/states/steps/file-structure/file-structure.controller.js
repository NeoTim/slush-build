;(function(){
  'use strict';
  angular
    .module('app')
    .controller('FileStructureCtrl', FileStructureCtrl);

    function FileStructureCtrl($scope, StatesService){
      StatesService.state(2)
        .then( function ( result ){
          $scope.content = result;

        });

    }
}).call(this);