(function() {
  'use strict';

  angular
    .module('singlePost')
    .component('singlePost', {
      templateUrl: 'modules/main/single-post/single-post.template.html',
      controller: ['$stateParams', '$window', 'Post',
        function SinglePostController($stateParams, $window, Post) {

          // defaults
          this.post = [];

          // initializes the state by fetching a post and scrolling to the top.
          this.$onInit = () => {
            this.fetchPost();
            this.scrollToTop();
          };

          // populates a post given route parameters.
          this.fetchPost = () => {
            Post.get({postId: $stateParams.id}, (post) => {
              this.post = post;
            });
          };

          // scrolls to the top of the application.
          this.scrollToTop = () => {
            $window.scrollTo(0, 0);
          };
        }]
    });
})();
