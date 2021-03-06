/*
 * Weather Forecast API
 * This is the swagger definition of the weather forecast API. For more info contact sdimopoulos@irisweb.gr
 *
 * OpenAPI spec version: 1.0.0
 * Contact: sdimopoulos@irisweb.gr
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WeatherForecastApi);
  }
}(this, function(expect, WeatherForecastApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ForecastInfoPressure', function() {
      beforeEach(function() {
        instance = new WeatherForecastApi.ForecastInfoPressure();
      });

      it('should create an instance of ForecastInfoPressure', function() {
        // TODO: update the code to test ForecastInfoPressure
        expect(instance).to.be.a(WeatherForecastApi.ForecastInfoPressure);
      });

      it('should have the property hourlyGraphUrl (base name: "hourly_graph_url")', function() {
        // TODO: update the code to test the property hourlyGraphUrl
        expect(instance).to.have.property('hourlyGraphUrl');
        // expect(instance.hourlyGraphUrl).to.be(expectedValueLiteral);
      });

      it('should have the property hourlyForecast (base name: "hourly_forecast")', function() {
        // TODO: update the code to test the property hourlyForecast
        expect(instance).to.have.property('hourlyForecast');
        // expect(instance.hourlyForecast).to.be(expectedValueLiteral);
      });

    });
  });

}));
