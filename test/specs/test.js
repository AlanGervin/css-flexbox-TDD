
var assert = require('assert');





describe('Title', function() {
  describe('#TitleImg has logo or splash image named logo.jpg', function() {
    it('#TitleImg contains logo.jpg', function() {
      browser.url('/');
      const image = $('#TitleImg');
      let link = image.getAttribute('src');
      console.log(typeof link);
      let answer = link.includes('logo.jpg');
      assert.strictEqual(answer, true);
    });
  });
  describe('Title is correct', function() {
    it('#Title text is strictEqual to Emerald Company', function() {
      browser.url('/');
      const title = $('#Title').getText();
      assert.strictEqual(title,"Emerald Company");
    });
  });
});


describe('Mission Statement', function() {
  describe('Mission statement is correct', function() {
    it('#missionStatement has correct statement', function() {
      browser.url("/");
      const missionStatement = $('#missionStatement');
      assert.strictEqual(missionStatement.getText(),"Buy gems")
    });
  });
});

describe("A list of products", function() {
  describe('unordered list items exists', function() {
    it('#items exits', function() {
      browser.url('/');
      const list = $('#items');
      const err = list.error;
      console.log(err);
      assert.strictEqual(err,undefined);
    })
  })
})

describe("Teammates", function() {
  describe("has flexbox named teammates", function() {
    it("#teammates is a flexbox", function() {
      let teammates = $("#teammates");
      let err = teammates.error;
      assert.strictEqual(err, undefined);
    })
  })
  describe("has display property is set to flex", function() {
    it("#teammates.display equal to flex", function() {
      let teammates = $("#teammates");
      let classAttrs = teammates.getAttribute('class');
      let answer = classAttrs.includes('flex');
      assert.strictEqual(answer, true);
    })
  })
})