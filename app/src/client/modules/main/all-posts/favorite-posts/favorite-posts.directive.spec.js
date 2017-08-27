/* eslint-disable */

describe('Favorite Posts Directive', () => {

  let compile, element, scope, ctrl;

  const postData = {
    "title": "FAKE TITLE"
  };

  // load modules
  beforeEach(module('favoritePosts'));
  beforeEach(module('test-templates'));

  // Prepare Compiler compiler
  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    element = angular.element('<favorite-posts></favorite-posts>');
    element = $compile(element)(scope);
    scope.$digest();
    ctrl = element.controller('favoritePosts');
    scope = element.scope();
  }));

  // Tests the functionality of the directive's controller.
  describe('Favorite Posts Controller', () => {
    it('should create a controller', () => {
      expect(ctrl).toBeDefined();
    });

    it('should initialize a definition for scope.favoritePosts', () => {
      expect(scope.favoritePosts).toBeDefined();
    });

    it('should add a favorite post', () => {
      scope.favoritePosts = [];

      ctrl.addFavoritePost('1');

      expect(scope.favoritePosts.length).toBe(1);
      expect(scope.favoritePosts).toContain('1');
    });

    it('should remove a favorite post', () => {
      scope.favoritePosts = ['1','2'];
      expect(scope.favoritePosts.length).toBe(2);

      ctrl.removeFavoritePost('1');
      expect(scope.favoritePosts.length).toBe(1);
    });
  });

  // Test DOM appearance for the directive.
  describe('Favorite Posts Template', () => {
    it('should contain a post', () => {
      scope.favoritePosts = [postData];
      scope.$digest();

      expect(element.text()).toContain(postData.title);
    });

    it('should have a `favorite-posts` class', () => {
      const favoritePostsElement = element[0].querySelector('.favorite-posts');
      expect(favoritePostsElement).not.toBeNull();
    });
  });
});
