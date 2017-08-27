/* eslint-disable */

describe('Add Favorite Directive', () => {

  let element, scope;

  let fakePost = {
    title: 'FAKE TITLE',
    body: 'fake body'
  };

  // load modules
  beforeEach(module('favoritePosts'));
  beforeEach(module('addFavorite'));
  beforeEach(module('test-templates'));

  // Prepare Compiler compiler
  beforeEach(inject(($rootScope, $compile, $controller) => {

    scope = $rootScope.$new();

    element = '<favorite-posts><add-favorite post="post"></add-favorite></favorite-posts>';
    element = angular.element(element);
    element = $compile(element)(scope);

    scope.$digest();
    scope = element.find('add-favorite').scope();
  }));

  it('should contain the text `Add to reading list.`', () => {
    let addFavoriteElem = element.find('add-favorite');
    expect(addFavoriteElem.text()).toContain('Add to reading list.');
  });

});
