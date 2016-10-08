(function() {
	'use strict';
	
    angular.module( 'myApp.home', [
        'ui.router',
        'ui.bootstrap',
        'ui.select',
        'myApp.service.geoLocation',
        'myApp.service.country',
        'myApp.service.weatherReport'
    ]);

})();
