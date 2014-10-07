;(function(){
  'use strict';
  angular
    .module('app')
    .controller('FileStructureCtrl', FileStructureCtrl);

    function FileStructureCtrl($scope){
      $scope.number = 1;
    }
}).call(this);