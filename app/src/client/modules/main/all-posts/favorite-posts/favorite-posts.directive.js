(function() {
  'use strict';

  angular
    .module('favoritePosts')
    .directive('favoritePosts', function() {
      return{
        restrict: 'E',
        transclude: true,
        scope: true,
        templateUrl: 'modules/main/all-posts/favorite-posts/favorite-posts.template.html',
        controller: ['$scope', function($scope) {
          $scope.favoritePosts = [];
          var self = this;

          // Adds a post to the favoritePosts array.
          self.addFavoritePost = function(post) {
            $scope.favoritePosts.push(post);
          };

          // Removes a post from the favoritePosts array.
          self.removeFavoritePost = function(post) {
            for (let i = $scope.favoritePosts.length - 1; i >= 0; i--) {
              if ($scope.favoritePosts[i] === post) {
                $scope.favoritePosts.splice(i, 1);
              }
            }
          };
        }]
      };
    });
})();
