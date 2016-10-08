(function () {
	'use strict';
	
    angular.module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
        }])
})();

