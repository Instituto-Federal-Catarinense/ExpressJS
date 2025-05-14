var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    
    const produtos = [
        { nome: 'Barbie Butterfly', filme: 'Mariposa e suas amigas borboletas', imagem: '/imagens/butterfly.jpg' },
        { nome: 'Barbie Mosqueteira', filme: 'Barbie e as Três Mosqueteiras', imagem: '/imagens/tres-mosqueteiras.jpg' },
        { nome: 'Barbie Popstar', filme: 'A Princesa e a Popstar', imagem: '/imagens/popstar.jpg' },
        { nome: 'Barbie Castelo de Diamante', filme: 'Castelo de Diamante', imagem: '/imagens/castelo-diamante.jpeg' },
        { nome: 'Barbie Fairytopia', filme: 'Fairytopia', imagem: '/imagens/fairytopia.jpg' },
        { nome: 'Barbie Rapunzel', filme: 'Rapunzel', imagem: '/imagens/rapunzel.webp' },
        { nome: 'Barbie Lago dos Cisnes', filme: 'Lago dos Cisnes', imagem: '/imagens/cisnes.webp' },
        { nome: 'Barbie Princesa da Ilha', filme: 'A Princesa da Ilha', imagem: '/imagens/ilha.jpg' },
        { nome: 'Barbie Super Princesa', filme: 'A Magia de Aladus', imagem: '/imagens/magia.jpg' },
        { nome: 'Barbie Quebra-Nozes', filme: 'O Quebra-Nozes', imagem: '/imagens/quebra-nozes.jpg' }
      ];
  
    // Renderizar a view 'produtos.hbs' passando os dados
    res.render('produtos', {
      titulo: 'lista de produtos',
      produtosParaView: produtos
    });
});

module.exports = router;