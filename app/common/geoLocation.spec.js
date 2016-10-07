describe( 'Geo location service', function() {

  var geoLocationService;

  beforeEach( module( 'myApp.service.geoLocation' ) );

  beforeEach(inject(function($injector) {
    geoLocationService = $injector.get('geoLocationService');
}));

  it('should get a coordinate', function() {
    
    var coordinate = geoLocationService.getCurrentPosition();

    expect(coordinate).toBeDefined();

});

});

