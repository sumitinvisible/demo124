import { Ang4nestedcomponentPage } from './app.po';

describe('ang4nestedcomponent App', () => {
  let page: Ang4nestedcomponentPage;

  beforeEach(() => {
    page = new Ang4nestedcomponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
