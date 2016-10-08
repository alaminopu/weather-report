(function() {
    'use strict';

    angular
    .module('myApp.service.weatherReport')
    .factory('weatherReportService', WeatherReportService);

    WeatherReportService.$inject = ['$q', '$http'];

    function WeatherReportService($q, $http) {
        var appid = 'db1f9494a4ca76704186cc37d10c7f9e';

        var weatherReportServc = {
            getWeatherReportByCoordinates: getWeatherReportByCoordinates,
            getWeatherReportByZipCode: getWeatherReportByZipCode
        };

        return weatherReportServc;

        // Implementation Details

        function getWeatherReportByCoordinates(lat, lon) {
            var deferred = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+ '&lon=' + lon +'&appid=' + appid + '&units=imperial')
            .success(function(data) { 
                deferred.resolve({
                    weather: data.weather,
                    main: data.main,
                    wind: data.wind,
                    rain: data.rain,
                    clouds: data.clouds,
                    name: data.name
                });
            }).error(function(msg, code) {
                deferred.reject(msg);
                console.error(msg, code);
            });

            return deferred.promise;
        };

        function getWeatherReportByZipCode(zipCode, countryCode){
            var deferred = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode + ',' + countryCode +'&appid=' + appid + '&units=imperial')
            .success(function(data) { 
                deferred.resolve({
                    weather: data.weather,
                    main: data.main,
                    wind: data.wind,
                    rain: data.rain,
                    clouds: data.clouds,
                    name: data.name
                });
            }).error(function(msg, code) {
                deferred.reject(msg);
                console.error(msg, code);
            });

            return deferred.promise;
        }
    }
})();