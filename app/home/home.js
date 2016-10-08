(function () {
    'use strict';

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = [
        '$uibModal', 
        'geoLocationService', 
        'countryHelper', 
        'weatherReportService'
    ];

    function HomeController($uibModal, geoLocationService, countryHelper, weatherReportService) {

        var vm = this;
        vm.countries = countryHelper;

        var getWeatherReportByCoordinate = function(position){
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            weatherReportService.getWeatherReportByCoordinates(lat, lon).then(function(data){
                console.log(data);
            });
        };

        var getWeatherReportByZipCode = function(error){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'home/modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalCtrl',
                resolve: {
                    countries: function () {
                      return vm.countries;
                    }
                }
            });

            var zip_code = '94040';
            var country_code = 'us';

            weatherReportService.getWeatherReportByZipCode(zip_code, country_code).then(function(data){
                console.log(data);
            });
        };

        // Getting geolocation
        geoLocationService.getCurrentPosition().then(
            getWeatherReportByCoordinate,
            getWeatherReportByZipCode
        );

    };
})();