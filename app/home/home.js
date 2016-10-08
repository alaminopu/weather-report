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

        // default value
        vm.zipCode = '94040';
        vm.countryCode = 'us';

        var getWeatherReportByCoordinate = function(position){
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            weatherReportService
            .getWeatherReportByCoordinates(lat, lon)
            .then(function(data){
                console.log(data);
            });
        };

        var getWeatherReportByZipCode = function(error){

            if(error.code !== 1){
                console.log(error.message);
            }

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'home/modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalCtrl',
                backdrop: 'static',
                resolve: {
                    countries: function () {
                      return vm.countries;
                    }
                }
            });

            modalInstance.result.then(function (formData) {
                vm.zipCode = formData.zipCode;
                vm.countryCode = formData.countryCode;

                weatherReportService
                .getWeatherReportByZipCode(vm.zipCode, vm.countryCode)
                .then(function(data){
                    console.log(data);
                });

            }, function () {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        // Getting geolocation
        geoLocationService.getCurrentPosition().then(
            getWeatherReportByCoordinate,
            getWeatherReportByZipCode
        );

    };
})();