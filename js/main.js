var app = angular.module('testApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider.when('/work', {
    templateUrl: 'views/work.html'
  });
}]);
