(function() {
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
            var deffered = $q.defer();

            if(!$window.navigator.geolocation){
                deffered.reject('Geolocation not supported')
            }else{
                $window.navigator.geolocation.getCurrentPosition(function(position){
                    deffered.resolve(position);
                },function(error){
                    deffered.reject(error);
                });
            }

            return deffered.promise;
        };
    }
})();