var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Item A', time: 'Grêmio.' },
      { id: 2, nome: 'Item B', time: 'Inter.' },
      { id: 3, nome: 'Item C', time: 'Flamengo.' },
      { id: 4, nome: 'Item D', time: 'Corinthians.' },
      { id: 5, nome: 'Item E', time: 'Palmeiras.'},
      { id: 6, nome: 'Item F', time: 'Juventude.'},
      { id: 7, nome: 'Item G', time: 'Cruzeiro.'},
      { id: 8, nome: 'Item H', time: 'Atlético Mineiro.'}


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
