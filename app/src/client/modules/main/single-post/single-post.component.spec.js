/* eslint-disable */

describe('Single Post Component', () => {

  beforeEach(module('singlePost'));

  describe('Single Post Component Controller', () => {

    let $httpBackend, $stateParams, ctrl;
    const postData = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };

    // Add a custom equality tester before each test
    beforeEach(() => {
      jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(inject(($componentController, _$httpBackend_, _Post_) => {
      $httpBackend = _$httpBackend_;
      Post = _Post_;
      $stateParams = {
        id: 1
      };

      ctrl = $componentController('singlePost', {
        $stateParams: $stateParams
      });
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    // tests $onInit function
    it ('should initialize the state by calling fetchPost and scrollToTop', () => {
      const fetchSpy = spyOn(ctrl, 'fetchPost').and.callFake(() => {
        return true;
      });
      const scrollSpy = spyOn(ctrl, 'scrollToTop').and.callFake(() => {
        return true;
      });

      ctrl.$onInit();
      
      expect(fetchSpy).toHaveBeenCalled();
      expect(scrollSpy).toHaveBeenCalled();
    });

    // tests fetchPost function
    it('should populate post array', () => {
      expect(true).toBeTruthy();
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts/1').respond(postData);
      expect(ctrl.post).toEqual([]);
      ctrl.fetchPost();
      $httpBackend.flush();
      expect(ctrl.post).toEqual(postData);
    });

    // tests scroll function
    it('should scroll to the top of the page', inject(($window) => {
      const spy = spyOn($window, 'scrollTo').and.callFake(() => {
        return true;
      });
      ctrl.scrollToTop();
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(0, 0);
    }));
  });
});
