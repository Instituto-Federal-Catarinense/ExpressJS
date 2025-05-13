var express = require('express');
var router = express.Router();

// Rota principal para renderizar a lista de produtos
router.get('/', (req, res) => {
    // Vetor de produtos (dados dinâmicos)
    const meusProdutos = [
      { id: 1, nome: 'Camiseta', descricao: 'Camiseta de algodão', preco: 49.90 },
      { id: 2, nome: 'Tênis', descricao: 'Tênis esportivo confortável', preco: 199.99 },
      { id: 3, nome: 'Relógio', descricao: 'Relógio digital à prova d’água', preco: 150.00 },
      { id: 4, nome: 'Fone de Ouvido', descricao: 'Fone Bluetooth com cancelamento de ruído', preco: 299.90 }
    ];
  
    // Renderizando a view 'produtos.ejs' e passando os dados dos produtos
    res.render('produtos', {
      titulo: 'Lista de Produtos',
      itensParaView: meusProdutos
    });
});

module.exports = router;
