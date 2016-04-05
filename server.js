/**
 * Created by Yuan on 12/24/15.
 */


var http = require("http"),
    url = require("url"),
    formidable = require("formidable"),
    sys = require("sys");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var postData = "";
        console.log("Request for " + pathname + " received");
        request.setEncoding("utf8");
        request.addListener("data", function(postDatachunk){
            postData += postDatachunk;
            console.log("Received POST data chunk " + postDatachunk + ".");
        });
        request.addListener("end", function(){
           route(pathname, handle, response, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
