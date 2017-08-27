(() => {
  'use strict';

  angular
    .module('allPosts')
    .component('allPosts', {
      templateUrl: 'modules/main/all-posts/all-posts.template.html',
      controller: ['Post', function AllPostsController(Post) {
        this.posts = [];

        this.$onInit = () => {
          this.getPosts();
        };

        this.getPosts = () => {
          Post.query().$promise.then((res) => {
            this.posts = res;
          });
        };

      }]
    });
})();
