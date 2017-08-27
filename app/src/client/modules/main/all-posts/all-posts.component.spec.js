/* eslint-disable */

describe('All Posts Component', () => {

  beforeEach(module('allPosts'));

  describe('All Posts Component Controller', () => {

    let $httpBackend, ctrl;
    const postData = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
    ];

    // Add a custom equality tester before each test
    beforeEach(() => {
      jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(inject(($componentController, _$httpBackend_, _Post_) => {
      $httpBackend = _$httpBackend_;
      Post = _Post_;

      ctrl = $componentController('allPosts');
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    // Tests onInit function
    it('should initialize the state by calling getPosts', () => {
      const spy = spyOn(ctrl, 'getPosts').and.callFake(() => {
        return true;
      });

      ctrl.$onInit();
      expect(spy).toHaveBeenCalled();
    });

    // Tests getPosts function
    it('should populate posts array', () => {
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts').respond(postData);
      expect(ctrl.posts).toEqual([]);

      ctrl.getPosts();
      $httpBackend.flush();
      expect(ctrl.posts).not.toEqual([]);
    });


  });
});
