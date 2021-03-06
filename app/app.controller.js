(function () {
    'use strict';
    
    angular.module('myApp')
        .controller('AppCtrl', AppController);

    AppController.$inject = ['$log', '$state', '$rootScope', '$scope', '$location'];

    function AppController($log, $state, $rootScope, $scope, $location) {

        var vm = this;
        vm.pageTitle ='Weather Status';

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                vm.pageTitle = toState.data.pageTitle + ' | ' + 'Weather Status';
                console.log(vm.pageTitle);
            }
        });
    };
})();

