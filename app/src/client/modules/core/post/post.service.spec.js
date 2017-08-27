/* eslint-disable */

'use strict';

describe('Post', () => {
  let $httpBackend;
  let Post;
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

  // Load the module that contains the `Post` service before each test
  beforeEach(module('core.post'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject((_$httpBackend_, _Post_) => {
    $httpBackend = _$httpBackend_;
    Post = _Post_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the posts data from `http://jsonplaceholder.typicode.com/posts`', () => {
    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts').respond(postData);
    let posts = Post.query();

    expect(posts).toEqual([]);
    $httpBackend.flush();
    expect(posts).toEqual(postData);
  });

  it('should fetch a single post from `http://jsonplaceholder.typicode.com/posts/:postId`', () => {
    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts/1').respond(postData[0]);
    let posts = Post.get({postId: 1});
    $httpBackend.flush();
    expect(posts).toEqual(postData[0]);
  });
});
