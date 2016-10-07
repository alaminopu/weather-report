/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

    browser.get('index.html');

    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });


    describe('home content', function() {

        beforeEach(function() {
            browser.get('index.html#/home');
        });


        it('should render home when user navigates to /home', function() {
            expect(element.all(by.css('h2')).first().getText()).
                toMatch("I am Kaiser Sose");
        });

    });

});