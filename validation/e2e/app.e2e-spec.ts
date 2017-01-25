import { ValidationPage } from './app.po';

describe('validation App', function() {
  let page: ValidationPage;

  beforeEach(() => {
    page = new ValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
