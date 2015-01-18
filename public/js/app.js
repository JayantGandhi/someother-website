(function(){
  var app = angular.module('someOtherApp', [
    'ngRoute',
    'appControllers'
  ]);

  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      // history states!
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/', {
          templateUrl : 'partials/home.html',
          controller  : 'HomeController'
        }).
        when('/sites', {
          templateUrl : 'partials/site-list.html',
          controller  : 'SiteListController'
        }).
        when('/sites/:siteId', {
          templateUrl : 'partials/site.html',
          controller  : 'SiteDetailsController'
        });
    }
  ]);
})();