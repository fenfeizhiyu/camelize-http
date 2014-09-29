angular.module('MyApp', ['camelizeHttp']).controller('BodyController', function($scope, $http, cHttp) {
  $scope.data = {};

  // get

  $http.get('/data.json').success(function(response) {
    $scope.data.$httpGet = response;
  });

  cHttp.get('/data.json').success(function(response) {
    $scope.data.cHttpGet = response;
  });

  // jsonp

  $http.jsonp('/data0.jsonp?callback=JSON_CALLBACK').success(function(response) {
    $scope.data.$httpJsonp = response;
  });

  cHttp.jsonp('/data1.jsonp?callback=JSON_CALLBACK').success(function(response) {
    $scope.data.cHttpJsonp = response;
  });

});
