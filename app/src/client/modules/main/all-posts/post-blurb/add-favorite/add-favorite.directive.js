(function() {
  'use strict';

  angular
    .module('addFavorite')
    .directive('addFavorite', function() {
      return{
        restrict: 'E',
        transclude: true,
        require: '^^favoritePosts',
        scope: {
          post: '='
        },
        templateUrl: 'modules/main/all-posts/post-blurb/add-favorite/add-favorite.template.html',
        link: function(scope, element, attrs, favoriteCtrl) {
          element.bind('click', function(e) {
            if (angular.element(e.target).hasClass('add-favorite')) {
              element.html('<div class="remove-favorite">Remove from reading list.</div>');
              favoriteCtrl.addFavoritePost(scope.post);
            } else {
              element.html('<div class="add-favorite">Add to reading list.</div>');
              favoriteCtrl.removeFavoritePost(scope.post);
            }
            scope.$apply();
          });

        }
      };
    });
})();
