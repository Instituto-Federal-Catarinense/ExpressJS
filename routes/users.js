var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
     const usuarios = [
        { id: 1, nome: 'clara', idade: '17' },
        { id: 2, nome: 'isabele', idade: '17' },
        { id: 3, nome: 'joão Paulo', idade: '16' },
        { id: 4, nome: 'Emanuel', idade: '17' }
    ];

  res.render('users', {
      titulo: 'Minha Lista de usuários',
      usuariosParaView: usuarios // Passando o array para a view
    });
  });
module.exports = router;
