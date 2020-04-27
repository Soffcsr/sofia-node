var http = require('http');

http.createServer(function(req, res){
    //writeHead permite mandar con la respuesta el estado con el que esta regresando
    res.writeHead(200, {'Content-Type': 'text/html'})
    
    // req.url para obtener la ruta de la request
    var url = req.url;
    if(url === '/contact'){
        res.write('<h1>Contact</h1>');
        res.end();
    }else{
        if(url === '/about'){
            res.write('<h1>About</h1>');
            res.end();
        }else{
            res.write('<h1>Welcome</h1>');
            res.end();
        }
    }
}).listen(3000, function(){
    console.log('servidor escuchando en el puerto 3000')
});

//NOTAS:
// cada vez que hago un cambio en el codigo, tengo que tirar el servidor y volverlo a levantar.