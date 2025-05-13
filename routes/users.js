var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'fulano', descricao: 'dormir.', email: 'fulano@gmail.com' },
      { id: 2, nome: 'cicrano', descricao: 'frequentar bailões.' , email: 'cicrano@gmail.com'},
      { id: 3, nome: 'beutrano', descricao: 'roubar doces de crianças.', email: 'beutrano@gmail.com'},
      { id: 4, nome: 'humano', descricao: 'futebol com carros.', email: 'fulano@gmail.com' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('users', {
      titulo: 'Meus Usuarios',
      itensParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;

