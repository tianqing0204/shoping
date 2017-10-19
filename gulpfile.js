var gulp=require("gulp");
var url=require('url');
var path=require('path');
var fs=require('fs');
var server=require("gulp-webserver");
gulp.task("sortmn", function () {
    gulp.src("./Data")
        .pipe(server({
            port:8080,
            livereload:true,
            directoryListing: {
                path: "./",
                enable: true
            },
            middleware: function (req,res,next) {
                var urlObj = url.parse(req.url);
               // console.log(urlObj);
                var xzq=urlObj.query;
                var dizhi=path.join(__dirname,"Data",xzq+".json");
                fs.exists(dizhi, function (exist) {
                    if(!exist){
                        res.writeHead(404,{
                            "Content-Type": "text/json;charset=UTF-8"
                        });
                        res.end("no")
                    }else{
                        fs.readFile(dizhi, function (error, result) {
                            if(error) return console.error(error);
                            res.writeHead(200,{
                                "Content-Type":"text/json;charset=UTF-8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(result.toString());
                        })
                    }
                })
            }
        }))
})