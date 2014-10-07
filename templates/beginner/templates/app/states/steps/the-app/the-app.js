;(function(){
  'use strict';

  angular
    .module('app')
    .config( TheApp )

    function TheApp($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('steps.the-app', {
          url: '/the-app',
          templateUrl: 'app/states/steps/the-app/the-app.html',
          controller: 'TheAppCtrl'
        })
    }

}).call(this);