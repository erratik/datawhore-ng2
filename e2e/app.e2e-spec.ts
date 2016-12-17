import { DatawhorePage } from './app.po';

describe('datawhore App', function() {
  let page: DatawhorePage;

  beforeEach(() => {
    page = new DatawhorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
