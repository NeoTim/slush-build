;(function(){
  'use strict';
  angular
    .module( 'app' )
    .service( 'StatesService', StatesService );

    function StatesService( $http, $q, Buildfile){

      this.content = [];

      this.get = function(){

        var that = this;

        if( !this.content ){
          return fetchData();
        }

        return $http.get(Buildfile)
          .then( function ( result ){
            console.log( result.data );
            that.content = result.data;
            return result.data;
          });

      };


      this.state = function( id ){

        var that = this;

        return $http.get(Buildfile)
          .then( function ( result ){
            // that.content = result.data;
            return _.where( result.data.content, {id:id} )[0];
          });
      };

      ////////////////////

      function fetchData(){

        var q = $q.defer();
        q.resolve( this.content );
        return q.promise;

      }
    }

}).call(this);