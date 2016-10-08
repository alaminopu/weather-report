(function () {
    'use strict';

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = ['$uibModal', 'geoLocationService', 'countryHelper'];

    function HomeController($uibModal, geoLocationService, countryHelper) {

        var vm = this;
        vm.countries = countryHelper;

        geoLocationService.getCurrentPosition().then(
        	function(position){
        		console.log(position)
        	},
        	function(error){
        		console.log(error);
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
        	}
        )

    };
})();