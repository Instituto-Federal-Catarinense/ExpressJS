var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Produto 1', descricao: 'Este é o produto 1.'},
      { id: 2, nome: 'Produto 2', descricao: 'Este é o produto 2.'},
      { id: 3, nome: 'Produto 3', descricao: 'Este é o produto 3.'},
      { id: 4, nome: 'Produto 4', descricao: 'Este é o produto 4.'},
      { id: 5, nome: 'Produto 5', descricao: 'Este é o produto 5.'},
      { id: 6, nome: 'Produto 6', descricao: 'Este é o produto 6.'},
      { id: 7, nome: 'Produto 7', descricao: 'Este é o produto 7.'},
      { id: 8, nome: 'Produto 8', descricao: 'Este é o produto 8.'}


    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Lista de Produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
