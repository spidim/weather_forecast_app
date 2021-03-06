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

  beforeEach(function() {
    instance = new WeatherForecastApi.CityApi();
  });

  describe('(package)', function() {
    describe('CityApi', function() {
      describe('getAllCityInfo', function() {
        it('should call getAllCityInfo successfully', function(done) {
          // TODO: uncomment getAllCityInfo call and complete the assertions
          /*

          instance.getAllCityInfo(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(WeatherForecastApi.City);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.coords).to.be.a(WeatherForecastApi.CityCoords);
                    expect(data.coords.lat).to.be.a('number');
                expect(data.coords.lat).to.be();
                expect(data.coords.lon).to.be.a('number');
                expect(data.coords.lon).to.be();
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("Athens");
              expect(data.currWeatherIconId).to.be.a('string');
              expect(data.currWeatherIconId).to.be("sunny");
              expect(data.forecastInfo).to.be.a(WeatherForecastApi.ForecastInfo);
                    {
                  let dataCtr = data.forecastInfo.overall;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("sunny");
                  }
                }
                expect(data.forecastInfo.temperature).to.be.a(WeatherForecastApi.ForecastInfoTemperature);
                      expect(data.forecastInfo.temperature.hourlyGraphUrl).to.be.a('string');
                  expect(data.forecastInfo.temperature.hourlyGraphUrl).to.be("temperature_{cityid}.png");
                  {
                    let dataCtr = data.forecastInfo.temperature.hourlyForecast;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(21.4);
                    }
                  }
                expect(data.forecastInfo.humidity).to.be.a(WeatherForecastApi.ForecastInfoHumidity);
                      expect(data.forecastInfo.humidity.hourlyGraphUrl).to.be.a('string');
                  expect(data.forecastInfo.humidity.hourlyGraphUrl).to.be("humidity_{cityid}.png");
                  {
                    let dataCtr = data.forecastInfo.humidity.hourlyForecast;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(21.4);
                    }
                  }
                expect(data.forecastInfo.pressure).to.be.a(WeatherForecastApi.ForecastInfoPressure);
                      expect(data.forecastInfo.pressure.hourlyGraphUrl).to.be.a('string');
                  expect(data.forecastInfo.pressure.hourlyGraphUrl).to.be("pressure_{cityid}.png");
                  {
                    let dataCtr = data.forecastInfo.pressure.hourlyForecast;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(21.4);
                    }
                  }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCityInfo', function() {
        it('should call getCityInfo successfully', function(done) {
          // TODO: uncomment, update parameter values for getCityInfo call and complete the assertions
          /*
          var cityId = 56;

          instance.getCityInfo(cityId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(WeatherForecastApi.City);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.coords).to.be.a(WeatherForecastApi.CityCoords);
                  expect(data.coords.lat).to.be.a('number');
              expect(data.coords.lat).to.be();
              expect(data.coords.lon).to.be.a('number');
              expect(data.coords.lon).to.be();
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Athens");
            expect(data.currWeatherIconId).to.be.a('string');
            expect(data.currWeatherIconId).to.be("sunny");
            expect(data.forecastInfo).to.be.a(WeatherForecastApi.ForecastInfo);
                  {
                let dataCtr = data.forecastInfo.overall;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("sunny");
                }
              }
              expect(data.forecastInfo.temperature).to.be.a(WeatherForecastApi.ForecastInfoTemperature);
                    expect(data.forecastInfo.temperature.hourlyGraphUrl).to.be.a('string');
                expect(data.forecastInfo.temperature.hourlyGraphUrl).to.be("temperature_{cityid}.png");
                {
                  let dataCtr = data.forecastInfo.temperature.hourlyForecast;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(21.4);
                  }
                }
              expect(data.forecastInfo.humidity).to.be.a(WeatherForecastApi.ForecastInfoHumidity);
                    expect(data.forecastInfo.humidity.hourlyGraphUrl).to.be.a('string');
                expect(data.forecastInfo.humidity.hourlyGraphUrl).to.be("humidity_{cityid}.png");
                {
                  let dataCtr = data.forecastInfo.humidity.hourlyForecast;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(21.4);
                  }
                }
              expect(data.forecastInfo.pressure).to.be.a(WeatherForecastApi.ForecastInfoPressure);
                    expect(data.forecastInfo.pressure.hourlyGraphUrl).to.be.a('string');
                expect(data.forecastInfo.pressure.hourlyGraphUrl).to.be("pressure_{cityid}.png");
                {
                  let dataCtr = data.forecastInfo.pressure.hourlyForecast;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(21.4);
                  }
                }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
