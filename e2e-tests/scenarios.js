/* eslint-disable */

'use strict';

describe('Demo Application', () => {

  it('should set `index.html` to `/`', () => {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/');
  });


  describe('View: Main', () => {

    let fakePost = {
      readingListTitle: 'SUNT',
      trueTitle: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    };

    beforeEach(() => {
      browser.get('index.html');
    });

    describe('Post Blurbs', () => {
      it('should populate many post blurbs', () => {
        let postList = element.all(by.repeater('post in $ctrl.posts'));

        expect(postList.count()).toBeGreaterThan(1);
      });

      it('should add a post to the reading list', () => {
        let addFavoriteText = element.all(by.css('.add-favorite')).get(0);
        addFavoriteText.click();

        let postList = element.all(by.repeater('favorite in favoritePosts'));
        let postListText = postList.get(0).getText();

        expect(postListText).toContain(fakePost.readingListTitle);
      });

      it('should change the url to `/posts/1/`and register single page content', () => {
        let readMoreText = element.all(by.css('.read-more')).get(0);
        readMoreText.click();

        expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/posts/1');

        let post = element(by.binding('$ctrl.post.title')).getText();
        expect(post).toEqual(fakePost.trueTitle);
      });
    });

    describe('Reading List', () => {
      it('should contain zero posts by default', () => {
        let readingListText = element(by.css('.favorite-posts')).getText();
        expect(readingListText).toEqual('Reading List');
      });

      it('should change the url to `/posts/1/` and register single page content', () => {
        let addFavoriteText = element.all(by.css('.add-favorite')).get(0);
        addFavoriteText.click();

        let favoriteReadMore = element.all(by.css('.favorite-post-title .read-more')).get(0);
        favoriteReadMore.click();
        expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/posts/1');

        let post = element(by.binding('$ctrl.post.title')).getText();
        expect(post).toEqual(fakePost.trueTitle);
      });
    });
  });


  describe('View: Single Post', () => {

    let fakePost = {
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    }

    beforeEach(() => {
      browser.get('/posts/1/');
    });

    it('should contain single post content', () => {
      expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/posts/1');
      let post = element(by.binding('$ctrl.post.title')).getText();
      let body = element(by.binding('$ctrl.post.body')).getText();
      expect(post).toEqual(fakePost.title);
      expect(body).toEqual(fakePost.body);
    });
  });
});
