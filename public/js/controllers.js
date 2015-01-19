// Controllers for the shiz
var appControllers = angular.module('appControllers', []);

appControllers.controller('SiteListController', ['$scope', '$http',
  function($scope, $http){
    // $scope.sites = sites;
    $http.get('/api/sites').
      success(function(data, status, headers, config) {
        console.log(data);
    }).
      error(function(data, status, headers, config) {

    });
    $scope.orderProp = 'dateCreated';
  }
]);

appControllers.controller('HomeController', ['$scope', '$http',
  function($scope, $http){
    $scope.section = '';
    $scope.setSection = function(section) {
      $scope.section = section;
    }
  }
]);

appControllers.controller('CvController', ['$scope', '$http', function($scope, $http){
  //stuff
}]);

// appControllers.controller('CollapseController', function ($scope) {
//   $scope.isCollapsed = true;
// });

var sites = [
  {
    'name' : 'Blue Haven Capital',
    'url'  : 'http://www.bluehavencapital.com',
    'dateCreated' : new Date(2014, 8)
  },
  {
    'name' : 'The SAIS Europe Journal of Global Affairs',
    'url'  : 'http://www.saisjournal.org',
    'dateCreated' : new Date(2015, 1)
  }

];