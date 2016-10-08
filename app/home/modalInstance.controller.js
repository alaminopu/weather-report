(function () {
    'use strict';
    
    angular.module('myApp.home')
        .controller('ModalInstanceCtrl',  ModalInstanceController);

    ModalInstanceController.$inject = ['$uibModalInstance', 'countries'];

    function ModalInstanceController($uibModalInstance, countries) {

        var vm = this;
        vm.countries = countries;
        vm.form = {};

        vm.save = function(){
            $uibModalInstance.close(vm.form);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    };
})();