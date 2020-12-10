var http=require("http");
var fs=require("fs");
var qstring=require("querystring");
var url=require("url");
function processrequest(req,res)
{
    const p=url.parse(req.url);
    switch(p.pathname)
    {
        case "/":
            res.end("Hello welcome");
            break;
        case "/about":
             fs.readFile("./index.html",function(err,data)
             {
                    res.end(data);
             });
             break;
    }

}
var srv=http.createServer(processrequest);
srv.listen(8181);