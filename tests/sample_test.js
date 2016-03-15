module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://127.0.0.1:5001")
      .waitForElementVisible('body', 1000)
      .title(function(err, res) {
        console.log('Title was: ' + navigator.userAgent); // Confirm the page title
      })
      .assert.containsText('body', 'Hello World')
      .end();
  }
};
