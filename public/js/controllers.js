// Controllers for the shiz
var appControllers = angular.module('appControllers', []);

appControllers.controller('SiteListController', ['$scope',
  function($scope){
    $scope.sites = sites;
    $scope.orderProp = 'dateCreated';
  }
]);

appControllers.controller('HomeController', ['$scope',
  function($scope){
    $scope.section = '';
    $scope.setSection = function(section) {
      $scope.section = section;
    }
  }
]);

appControllers.controller('CollapseController', function ($scope) {
  $scope.isCollapsed = true;
});

appControllers.controller('CvController', function($scope){
  //stuff
});

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