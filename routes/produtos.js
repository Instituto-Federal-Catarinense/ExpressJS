var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Tênis', descricao: 'ADIDAS' },
      { id: 2, nome: 'Calça', descricao: 'NIKE' },
      { id: 3, nome: 'Blusa', descricao: 'NIKE' },
      { id: 4, nome: 'Bermuda', descricao: 'UMBRO' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Minha Lista de Produtos',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
