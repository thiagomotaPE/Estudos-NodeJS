//como iniciar um servidor usando o express

const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.contentType('application/html');
    res.status(200).send('<h1> hello world</h1>');
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: "john doe",
            email: "johndoe.com" 
        },

        {
            name: "jane doe",
            email: "jane@doe.com"
        }
    ];

    res.status(200).json(users);
});

//definindo a porta do servidor
const port = 8080;

app.listen(port, () => {
    console.log(`rodando com express na porta ${port}`);
});


//ccria o servidor do mesmo jeito que no arquivo http so que com menos trabalho!