
var assert = require('assert');





describe('Title', function() {
  describe('#TitleImg has logo or splash image named logo.jpg', function() {
    it('#TitleImg contains images/logo.jpg', function() {
      browser.url('/');
      const image = $('#TitleImg');
      image.getAttribute('src');

      assert.equal(image.getAttribute('src'),"http://localhost:5500/images/logo.jpg")
    })
    it('can handle commands synchronously', () => {
      let value = $('#TitleImg').getValue()
      console.log(value) // outputs: some value
    })

  });
});

