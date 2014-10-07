;(function(){
  'use strict';

  angular
    .module('app')
    .config( TheApp )

    function TheApp($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.lets-build', {
          url: '/lets-build',
          templateUrl: 'app/states/steps/lets-build/lets-build.html',
          controller: 'LetsBuildCtrl'
        })
    }

}).call(this);