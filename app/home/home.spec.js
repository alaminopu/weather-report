describe('home section', function () {

    beforeEach(module('myApp.home'));

    describe('Home Controller', function () {

        var $controller;

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it('should provide simple access to its data', function () {
            var scope = {};
            var homeCtrl = $controller('HomeCtrl', {$scope: scope});

            expect(homeCtrl).toBeDefined();
            expect(homeCtrl.name).toBeDefined();
            expect(homeCtrl.number).toBeDefined();

            expect(homeCtrl.name).toBe('Kaiser Sose');
            expect(homeCtrl.number).toBe('867-5309');


        });
    });
});

