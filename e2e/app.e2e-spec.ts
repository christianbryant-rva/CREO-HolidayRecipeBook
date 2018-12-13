import { HolidayFinalPage } from './app.po';

describe('holiday-final App', function() {
  let page: HolidayFinalPage;

  beforeEach(() => {
    page = new HolidayFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
