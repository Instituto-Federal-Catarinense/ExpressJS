const express = require('express');
const router = express.Router();

// Rota principal para renderizar a lista de produtos
router.get('/', (req, res) => {
  // Vetor de produtos (dados dinâmicos)
  const meusProdutos = [
    { id: 1, nome: 'Camiseta', descricao: 'Camiseta de algodão', preco: 49.90, imagem: 'https://images.tcdn.com.br/img/img_prod/947450/camiseta_strong_preto_malha_pesada_1053_1_8503b6be114c469d3b00283ec22a5642.jpghttps://upload.wikimedia.org/wikipedia/commons/8/81/Camiseta-negra.jpg' },
    { id: 2, nome: 'Tênis', descricao: 'Tênis esportivo confortável', preco: 199.99, imagem: 'https://images3.memedroid.com/images/UPLOADED931/63d04581c8edb.jpeg' },
    { id: 3, nome: 'Relógio', descricao: 'Relógio digital à prova d’água', preco: 150.00, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZBSfK_gO-MgB5E8pqSj8EZn8UOw7wF9-ug&s.jpeg' },
    { id: 4, nome: 'Fone de Ouvido', descricao: 'Fone Bluetooth com cancelamento de ruído', preco: 299.90, imagem: 'https://conteudo.imguol.com.br/c/geral/gif-animated/84/2018/03/20/fones-de-ouvido-1---yoda-1521550802598_g2_400x232.jpg' }
  ];

  res.render('produto', {
    titulo: 'Lista de Produtos',
    itensParaView: meusProdutos
  });
});

module.exports = router;
