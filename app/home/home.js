(function () {

    angular.module('myApp.home')
        .controller('HomeCtrl',  HomeController);

    HomeController.$inject = ['geoLocationService'];

    function HomeController(geoLocationService) {

        vm = this;

        geoLocationService.getCurrentPosition().then(
        	function(position){
        		console.log(position)
        	},
        	function(error){
        		console.log(error);
        	}
        )

    };
})();