(function () {
    'use strict';
    
    angular.module('myApp.home')
        .controller('ModalInstanceCtrl',  ModalInstanceController);

    ModalInstanceController.$inject = ['$uibModalInstance'];

    function ModalInstanceController($uibModalInstance) {

        var vm = this;

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    };
})();