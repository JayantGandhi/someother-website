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

appControllers.controller('HomeController', ['$scope', '$rootScope', '$location', '$http',
  function($scope, $rootScope, $location, $http){
    $scope.section = '';
    $scope.setSection = function(section) {
      $scope.section = section;
    }

    $scope.professional = function(view) {
      $rootScope.siteType = 'professional';
      $location.path(view);
    }

    $scope.unprofessional = function(view) {
      $rootScope.siteType = 'unprofessional';
      $location.path(view);
    }

    $scope.menuPrompt = function(promptText) {
      $scope.promptText = promptText;
    }

    angular.element(document).ready(function () {
      (function ($) {
    		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    		$('.tab ul.tabs li a').click(function (g) {
    			var tab = $(this).closest('.tab'),
    				index = $(this).closest('li').index();

    			tab.find('ul.tabs > li').removeClass('current');
    			$(this).closest('li').addClass('current');

    			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
    			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

    			g.preventDefault();
    		} );
    	})(jQuery);
    });
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
