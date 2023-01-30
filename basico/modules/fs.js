const fs = require('fs');
const path = require('path');

// criar uma pasta ---------- toooop
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error) {
        return console.log('erro: ', error);
    }
    console.log("pasta criada com sucesso!");
});


//criar um arquivo dentro de uma pasta ja existente ------------- tooooooop
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'hello node', (error) => {
    if(error) {
        return console.log('erro: ', error);
    }
    console.log("pasta criada com sucesso!");


    //adicionar conteudo a um arquivo a pasta ja criada
    fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'), 'hello world', (error) => {
        if(error) {
            return console.log("error: ", error);
        }
        console.log("conteudo adicionado");
    });


    //ler conteudo de um arquivo
    fs.readFile(path.join(__dirname, '/teste', '/teste.txt'), 'utf8', (error, data) => {
        if(error) {
            return console.log("error: ", error);
        }
        console.log(data);
    });
});