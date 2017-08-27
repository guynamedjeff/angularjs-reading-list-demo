/* eslint-disable */

describe('Post Blurb Directive', () => {

  let compile, element, scope, ctrl;

  let favoritePostsCtrl = {
    addFavorite: function() { return 123; },
    removeFavorite: function() { return 123; }
  };

  let fakePost = {
    title: 'FAKE TITLE',
    body: 'fake body'
  };


  // load modules
  beforeEach(module('postBlurb'));
  beforeEach(module('test-templates'));

  // Prepare Compiler compiler
  beforeEach(inject(($rootScope, $compile, $controller) => {
    spyOn(favoritePostsCtrl, 'addFavorite').and.callThrough();
    spyOn(favoritePostsCtrl, 'removeFavorite').and.callThrough();

    scope = $rootScope.$new();
    element = angular.element('<post-blurb></post-blurb>');
    element.data('$favoritePostsController', favoritePostsCtrl);
    element = $compile(element)(scope);
    scope.$digest();
    scope = element.scope();
  }));

  it('should have a `post-blurb` class', () => {
    const postBlurbElement = element[0].querySelector('.post-blurb');
    expect(postBlurbElement).not.toBeNull();
  });

  it('should contain a post title and post body', () => {
    scope.post = fakePost;
    scope.$digest();

    expect(element.text()).toContain(fakePost.title);
    expect(element.text()).toContain(fakePost.body);
  });

});
