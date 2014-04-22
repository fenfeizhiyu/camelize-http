angular.module('MyApp', ['camelizeHttp']).controller('BodyController', function($scope, $http, cHttp) {
  $scope.data = {};

  $http.get('/data.json').success(function(response) {
    $scope.data.$http = response;
  });

  cHttp.get('/data.json').success(function(response) {
    $scope.data.cHttp = response;
  });

});
