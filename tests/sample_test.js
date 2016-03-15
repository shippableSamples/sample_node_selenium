module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://127.0.0.1:5001")
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Linux x86_64')
      .end();
  }
};
