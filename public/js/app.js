(function(){
  var app = angular.module('someOtherApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'appControllers',
    'appServices'
  ]);

  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      // history states!
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/', {
          templateUrl : 'partials/home.html',
          controller  : 'HomeController',
          title       : 'Website'
        }).
        when('/home', {
          templateUrl : 'partials/professional.html',
          controller  : 'HomeController',
          title       : 'Website'
        }).
        when('/hoam', {
          templateUrl : 'partials/unprofessional.html',
          controller  : 'HomeController',
          title       : 'Websight'
        }).
        when('/sites', {
          templateUrl : 'partials/site-list.html',
          controller  : 'SiteListController',
          title       : 'Sites'
        }).
        when('/sites/:siteId', {
          templateUrl : 'partials/site.html',
          controller  : 'SiteDetailsController',
          title       : 'Site'
        }).
        when('/curriculum-vitae', {
          templateUrl : 'partials/cv.html',
          controller  : 'CvController',
          title       : 'CV'
        }).
        when('/publications', {
          templateUrl : 'partials/publications.html',
          controller  : 'PublicationsController',
          title       : 'Publications'
        });
    }
  ]);

  app.run(['$location', '$rootScope', '$route', function($location, $rootScope, $route) {
    $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
      //Change page title, based on Route information
      $rootScope.title = $route.current.title;
    });
  }]);
})();