import { Angular2TodoProjectPage } from './app.po';

describe('angular2-todo-project App', () => {
  let page: Angular2TodoProjectPage;

  beforeEach(() => {
    page = new Angular2TodoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
