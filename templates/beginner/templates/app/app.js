;(function(){
  'use strict';

  angular
    .module('app', [
      'ui.router'])
    .config( States );

    function States($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
    }
}).call(this);