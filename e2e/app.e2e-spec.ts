import { AdvenaPage } from './app.po';

describe('advena App', function() {
  let page: AdvenaPage;

  beforeEach(() => {
    page = new AdvenaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
