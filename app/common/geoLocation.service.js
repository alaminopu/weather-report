(function() {
    'use strict';

    angular
    .module('myApp.service.geoLocation')
    .factory('geoLocationService', GeoLocationService);

    GeoLocationService.$inject = ['$q', '$window'];

    function GeoLocationService($q, $window) {

        var geoLocService = {
            getCurrentPosition: getCurrentPosition
        };

        return geoLocService;

        // Implementation Details

        function getCurrentPosition() {
            var deferred = $q.defer();

            if(!$window.navigator.geolocation){
                deferred.reject('Geolocation not supported')
            }else{
                $window.navigator.geolocation.getCurrentPosition(function(position){
                    deferred.resolve(position);
                },function(error){
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        };
    }
})();