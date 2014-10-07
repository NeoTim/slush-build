;(function(){
  'use strict';

  angular
    .module('app')
    .config( States );

    function States($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/states/home/home.html',
          controller: 'HomeCtrl'
        })

    }
}).call(this);