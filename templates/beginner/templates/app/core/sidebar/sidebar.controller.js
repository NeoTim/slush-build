;(function(){
  'use struct';
  angular
    .module('app')
    .controller('SideBarCtrl', SideBarCtrl);
    /* @inject */
    function SideBarCtrl($scope, $location, $state, StatesService) {

      StatesService.get()
        .then( function ( data ){
          $scope.steps = data.states;
        })

      $scope.isCollapsed = true;

      $scope.isActive = function(route) {
        return route === $state.current.name
      };
    }

}).call(this);