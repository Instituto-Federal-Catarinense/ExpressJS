var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Item Bola de Vôlei', descricao: 'Bola para vôlei de quadra. Mikasa.' },
      { id: 2, nome: 'Item Joelheira', descricao: 'Joelheira de proteção para vôlei de quadra.' },
      { id: 3, nome: 'Item Manguito', descricao: 'Manguito para proteção. Vôlei de quadra.' },
      { id: 4, nome: 'Item Cotoveleira', descricao: 'Cotoveleira de proteção para vôlei de quadra.' },
      { id: 5, nome: 'Item Protetor de Dedos', descricao: 'Protetor de dedos para vôlei de quadra.' },
      { id: 6, nome: 'Item Bola de Vôlei', descricao: 'Bola de vôlei para areia. Penalty.' },
      { id: 7, nome: 'Item Meia para Vôlei', descricao: 'Meia para vôlei de areia.' },
      { id: 8, nome: 'Item Meia para Vôlei de Quadra', descricao: 'Meia para vôlei de quadra.' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Equipamentos de Voleibol',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
