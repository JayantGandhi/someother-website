/*! SomeOtherWebsite 16-11-2015 */
!function(){var a=angular.module("someOtherApp",["ngRoute","ngAnimate","ui.bootstrap","appControllers","appServices"]);a.config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"partials/home.html",controller:"HomeController",title:"Website"}).when("/sites",{templateUrl:"partials/site-list.html",controller:"SiteListController",title:"Sites"}).when("/sites/:siteId",{templateUrl:"partials/site.html",controller:"SiteDetailsController",title:"Site"}).when("/curriculum-vitae",{templateUrl:"partials/cv.html",controller:"CvController",title:"CV"}).when("/publications",{templateUrl:"partials/publications.html",controller:"PublicationsController",title:"Publications"})}]),a.run(["$location","$rootScope","$route",function(a,b,c){b.$on("$routeChangeSuccess",function(a,d){b.title=c.current.title})}])}();var appControllers=angular.module("appControllers",[]);appControllers.controller("SiteListController",["$scope","$http","Site",function(a,b,c){a.sites=c.query(),a.orderProp="dateCreated"}]),appControllers.controller("HomeController",["$scope","$http",function(a,b){a.section="",a.setSection=function(b){a.section=b}}]),appControllers.controller("CvController",["$scope","$http","Edu","Exp",function(a,b,c,d){a.education=c.query(),a.experience=d.query()}]),appControllers.controller("PublicationsController",["$scope","$http","Pubs",function(a,b,c){a.publications=c.query(),a.orderProp="pubDate"}]);var appServices=angular.module("appServices",["ngResource"]);appServices.factory("Site",["$resource",function(a){return a("/api/sites",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]),appServices.factory("Edu",["$resource",function(a){return a("/api/education",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]),appServices.factory("Exp",["$resource",function(a){return a("/api/experience",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]),appServices.factory("Pubs",["$resource",function(a){return a("/api/publications",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]),function(){var a=angular.module("someOtherApp",["ngRoute","ngAnimate","ui.bootstrap","appControllers","appServices"]);a.config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"partials/home.html",controller:"HomeController",title:"Website"}).when("/sites",{templateUrl:"partials/site-list.html",controller:"SiteListController",title:"Sites"}).when("/sites/:siteId",{templateUrl:"partials/site.html",controller:"SiteDetailsController",title:"Site"}).when("/curriculum-vitae",{templateUrl:"partials/cv.html",controller:"CvController",title:"CV"}).when("/publications",{templateUrl:"partials/publications.html",controller:"PublicationsController",title:"Publications"})}]),a.run(["$location","$rootScope","$route",function(a,b,c){b.$on("$routeChangeSuccess",function(a,d){b.title=c.current.title})}])}();var appControllers=angular.module("appControllers",[]);appControllers.controller("SiteListController",["$scope","$http","Site",function(a,b,c){a.sites=c.query(),a.orderProp="dateCreated"}]),appControllers.controller("HomeController",["$scope","$http",function(a,b){a.section="",a.setSection=function(b){a.section=b}}]),appControllers.controller("CvController",["$scope","$http","Edu","Exp",function(a,b,c,d){a.education=c.query(),a.experience=d.query()}]),appControllers.controller("PublicationsController",["$scope","$http","Pubs",function(a,b,c){a.publications=c.query(),a.orderProp="pubDate"}]);var appServices=angular.module("appServices",["ngResource"]);appServices.factory("Site",["$resource",function(a){return a("/api/sites",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]),appServices.factory("Edu",["$resource",function(a){return a("/api/education",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]),appServices.factory("Exp",["$resource",function(a){return a("/api/experience",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]),appServices.factory("Pubs",["$resource",function(a){return a("/api/publications",{},{query:{method:"GET",isArray:!0,transformResponse:function(a,b){var c=angular.fromJson(a);return c.list}}})}]);;(function(){
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
})();;// Controllers for the shiz
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

appControllers.controller('PublicationsController', ['$scope', '$http', 'Pubs',
  function($scope, $http, Pubs){
    $scope.publications = Pubs.query();

    $scope.orderProp = 'pubDate';
}]);
;;var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Site', ['$resource',
  function($resource){
    return $resource('/api/sites', {}, {
      query: {
        method:'GET',
        isArray:true,
        transformResponse: function(data, header) {
          var wrappedobj = angular.fromJson(data);
          return wrappedobj.list;
        }
      }
    });
  }]);

// GET educated
appServices.factory('Edu', ['$resource',
  function($resource){
    return $resource('/api/education', {}, {
      query: {
        method:'GET',
        isArray:true,
        transformResponse: function(data, header) {
          var wrappedobj = angular.fromJson(data);
          return wrappedobj.list;
        }
      }
    });
  }]);

// GET experience
appServices.factory('Exp', ['$resource',
  function($resource){
    return $resource('/api/experience', {}, {
      query: {
        method:'GET',
        isArray:true,
        transformResponse: function(data, header) {
          var wrappedobj = angular.fromJson(data);
          return wrappedobj.list;
        }
      }
    });
  }]);

appServices.factory('Pubs', ['$resource',
  function($resource){
    return $resource('/api/publications', {}, {
      query: {
        method:'GET',
        isArray:true,
        transformResponse: function(data, header) {
          var wrappedobj = angular.fromJson(data);
          return wrappedobj.list;
        }
      }
    });
  }]);
