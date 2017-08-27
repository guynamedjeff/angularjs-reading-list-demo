(function() {
  'use strict';

  angular
    .module('postBlurb')
    .directive('postBlurb', function() {
      return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'modules/main/all-posts/post-blurb/post-blurb.template.html'
      };
    });
})();
