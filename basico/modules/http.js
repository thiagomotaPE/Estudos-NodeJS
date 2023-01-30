const { rmSync } = require('fs');
const http = require('http');

const port = 8080;

//criando um servidor
const server = http.createServer((req, res) => { //req: requisição feita ao servidor.  res: resposta do servidor.
    if(req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1> home page</h1>');
    }

    if(req.url === '/users') {
        const users = [
            {
                name: "john doe",
                email: "johndoe.com" 
            },

            {
                name: "jane doe",
                email: "jane@doe.com"
            }
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
});


//colocando o server no ar
server.listen(port, () => console.log(`Rodando na porta ${port}!`))


//acessar o server pelo navegador
//escreva no navegador: localhost:8080/home