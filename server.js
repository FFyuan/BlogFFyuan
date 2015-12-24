/**
 * Created by Yuan on 12/24/15.
 */


var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

