var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Josias', idade: '17' },
      { id: 2, nome: 'Arthur', idade: '18' },
      { id: 3, nome: 'Giovanna', idade: '18' },
      { id: 4, nome: 'Pietro', idade: '17' },
      { id: 5, nome: 'Leo', idade: '17' },
      { id: 6, nome: 'Vanessa', idade: '17' },
      { id: 7, nome: 'Pâmela', idade: '17' },
      { id: 8, nome: 'Nana', idade: '17' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus usuários',
      usuariosParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
