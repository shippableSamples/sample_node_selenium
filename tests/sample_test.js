module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://127.0.0.1:5001")
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36")
      .end();
  }
};
