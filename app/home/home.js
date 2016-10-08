(function () {
    'use strict';

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = ['$uibModal', 'geoLocationService'];

    function HomeController($uibModal, geoLocationService) {

        var vm = this;

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
                    controllerAs: 'modalCtrl'
                });
        	}
        )

    };
})();