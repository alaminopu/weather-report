# Weather Status based on Geo location. 

This is a simple angular project to get current weather status by using coordinates or City name. Public API to get the weather data - [http://openweathermap.org/current](http://openweathermap.org/current) 


## Updating Tools and Packages

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


### Running the App during Development

```
npm start
```

This will run your app in an http server accessible at [http://localhost:8000](http://localhost:8000)



### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], and run with [Karma Test Runner][karma]. 

* configuration file: `karma.conf.js`
* test files are next to the code and named: `*.spec.js`.

To run, use the npm script:

```
npm test
```

Karma will run and stay running watching files for changes, then rerunning the tests.

If you just want a single run then...

```
npm run test-single-run
```