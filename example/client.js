angular.module('camelize', []).controller('BodyController', function($scope, $http) {
  $scope.data = {};

  $http.get('/data.json').success(function(response) {
    $scope.data.$http = response;
  });

  $scope.data.cHttp = {
    fromServer: 42,
    array: [{ nestedChild: 1 }]
  };
});
