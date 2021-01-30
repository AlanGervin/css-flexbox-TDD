
var assert = require('assert');





describe('Title', function() {
  describe('#TitleImg has logo or splash image named logo.jpg', function() {
    it('#TitleImg contains logo.jpg', function() {
      browser.url('/');
      const image = $('#TitleImg');
      let link = image.getAttribute('src');
      console.log(typeof link);
      let answer = link.includes('logo.jpg');
      assert.equal(answer, true);
    })
  });

});

