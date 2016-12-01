import { LoginRegisterPage } from './app.po';

describe('-login-register App', function() {
  let page: LoginRegisterPage;

  beforeEach(() => {
    page = new LoginRegisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
