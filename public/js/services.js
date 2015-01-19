var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Site', ['$resource',
  function($resource){
    return $resource('/api/sites', {}, {
      query: {
        method:'GET',
        isArray:true,
        transformResponse: function(data, header) {
          var wrappedobj = angular.fromJson(data);
          return wrappedobj.sites;
        }
      }
    });
  }]);