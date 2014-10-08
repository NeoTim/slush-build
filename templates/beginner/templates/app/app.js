;(function(){
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.core'])
    .config( States );

    function States($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
    }
}).call(this);