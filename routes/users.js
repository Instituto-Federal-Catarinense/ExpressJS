//var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//});

/* GET users listing. */
//router.get('/alan', function(req, res, next) {
 // res.send('Olá, Alan!');
//});

//module.exports = router;

var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsers = [
      { id: 1, nome: 'Alan', descricao: 'Alan Roxo treina na kirra fitness.', imagem: 'imagens/sosoalan.jpeg'},
      { id: 2, nome: 'Giulia', descricao: 'oi.', imagem: 'imagens/baladaofofo.jpeg'},
      { id: 3, nome: 'Eloá', descricao: 'tchau.', imagem: 'imagens/eloaeterezinha.jpeg' }
      
   ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('users', {
      titulo: 'Minha Lista de Users',
      itensParaUsers: meusUsers // Passando o array para a view
    });
  });

  module.exports = router;
