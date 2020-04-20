var http = require('http');

http.createServer(function(req, res){
    res.write('Hello world');
    res.end();
}).listen(3000, function(){
    console.log('servidor escuchando en el puerto 3000')
});