import { MovieFinderAppPage } from './app.po';

describe('movie-finder-app App', () => {
  let page: MovieFinderAppPage;

  beforeEach(() => {
    page = new MovieFinderAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
