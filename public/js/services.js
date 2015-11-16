var appServices = angular.module('appServices', ['ngResource']);

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
