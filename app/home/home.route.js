(function () {
    angular.module('myApp.home')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('home', {
                url: '/home',
                views: {
                    "main": {
                        controller: 'HomeCtrl as homeCtrl',
                        templateUrl: 'home/home.tpl.html'
                    }
                },
                data: {pageTitle: 'Home'}
            });
        }])
})();