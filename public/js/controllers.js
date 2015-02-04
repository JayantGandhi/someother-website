// Controllers for the shiz
var appControllers = angular.module('appControllers', []);

appControllers.controller('SiteListController', ['$scope', '$http', 'Site',
  function($scope, $http, Site){
    $scope.sites = Site.query();

    //make dates for the sites
    // for (var i = $scope.sites.length - 1; i >= 0; i--) {
    //   $scope.sites[i].dateCreated = new Date()
    // };

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

appControllers.controller('CvController', ['$scope', '$http', 'Edu', 'Exp',
  function($scope, $http, Edu, Exp){
    $scope.education  = Edu.query();
    $scope.experience = Exp.query();

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