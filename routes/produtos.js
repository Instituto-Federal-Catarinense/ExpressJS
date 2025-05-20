var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const produtos = [
  { id: 1, nome: 'Tênis', marca: 'ADIDAS', imagem: '/tenis.jpg' },
  { id: 2, nome: 'Calça', marca: 'NIKE', imagem: '/calca.webp' },
  { id: 3, nome: 'Blusa', marca: 'NIKE', imagem: '/blusa.jpg' },
  { id: 4, nome: 'Bermuda', marca: 'UMBRO', imagem: '/bermuda.jpg' }
];

  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Minha Lista de Produtos',
      produtosParaView: produtos // Passando o array para a view
    });
  });

  module.exports = router;
