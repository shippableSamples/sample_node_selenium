module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://127.0.0.1:1337")
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Hello World')
      .end();
  }
};
