import { Prueba2Page } from './app.po';

describe('prueba2 App', () => {
  let page: Prueba2Page;

  beforeEach(() => {
    page = new Prueba2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
