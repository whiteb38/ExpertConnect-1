angular.module('Service', []).factory('App', ['$http', function($http) {

    return {
        // call to get
        get : function() {
            return $http.get('/api/names');
        }
     }
   }]);
