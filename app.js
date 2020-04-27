var http = require('http');

http.createServer(function(req, res){
    //writeHead permite mandar con la respuesta el estado con el que esta regresando
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(3000, function(){
    console.log('servidor escuchando en el puerto 3000')
});