(() => {
  'use strict';

  angular.
    module('core.post').
    factory('Post', ['$resource',
      ($resource) => {
        return $resource('http://jsonplaceholder.typicode.com/posts/:postId', {}, {
          query: {
            method: 'GET',
            isArray: true
          }
        });
      }
    ]);
})();
