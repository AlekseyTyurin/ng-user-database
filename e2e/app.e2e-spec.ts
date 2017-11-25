import { NgUserDatabasePage } from './app.po';

describe('ng-user-database App', () => {
  let page: NgUserDatabasePage;

  beforeEach(() => {
    page = new NgUserDatabasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
