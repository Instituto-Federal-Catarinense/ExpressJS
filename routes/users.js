var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Joedio', time: 'Flamengo' },
      { id: 2, nome: 'Joaquim', time: 'Palmeiras' },
      { id: 3, nome: 'Maria', time: 'Vasco' },
      { id: 4, nome: 'Roberto', time: 'Corinthians' },
      { id: 5, nome: 'Fernando', time: 'Grêmio' },
      { id: 6, nome: 'Diego', time: 'São Paulo' },
      { id: 7, nome: 'Ruan', time: 'Cruzeiro' },
      { id: 8, nome: 'Luiz', time: 'Internacional' },
      { id: 9, nome: 'Gustavo', time: 'Botafogo' }

    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus Usuários',
      itensParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
