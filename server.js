
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><head><script>setInterval(function(){document.body.innerHTML = document.body.innerHTML.replace("Hello", navigator.userAgent);}, 0);</script></head><body>Hello</body></html>');
  // Prevents the build container from timing out by waiting for the server to close.
  process.nextTick(function () {
    console.log('Stopping server running at http://127.0.0.1:5001');
    process.exit();
  });
});

server.listen(5001, '127.0.0.1');

console.log('Server running at http://127.0.0.1:5001/');
