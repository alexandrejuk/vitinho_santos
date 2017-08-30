import { HairPage } from './app.po';

describe('hair App', () => {
  let page: HairPage;

  beforeEach(() => {
    page = new HairPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
