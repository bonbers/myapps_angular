import { MyappsPage } from './app.po';

describe('myapps App', () => {
  let page: MyappsPage;

  beforeEach(() => {
    page = new MyappsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
