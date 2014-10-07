;(function(){
  'use strict';

  angular
    .module('app')
    .config( States )

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.file-structure', {
          url: '/file-structure',
          templateUrl: 'app/states/steps/file-structure/file-structure.html',
          controller: 'FileStructureCtrl'
        })
    }

}).call(this);