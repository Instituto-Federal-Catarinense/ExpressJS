var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, produto: 'Geladeira', valor: 'R$3000,00' },
      { id: 2, produto: 'Forno', valor: 'R$499,90' },
      { id: 3, produto: 'TV', valor: 'R$4990,90' },
      { id: 4, produto: 'Videogame', valor: 'R$3890,00' },
      { id: 5, produto: 'Computador', valor: 'R$6550,00' },
      { id: 6, produto: 'Sabonete', valor: 'R$2,99' },
      { id: 7, produto: 'Mouse', valor: 'R$199,90' },
      { id: 8, produto: 'Teclado', valor: '150,50' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus produtos',
      produtosParaView: meusProdutos// Passando o array para a view
    });
  });

  module.exports = router;
