

var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Site com lista de alunos do Jardel', descricao: 'Lista criada para o Jardel mas se comprar vira seu', imagem: 'imagens/jardellogo.png'},
      { id: 2, nome: 'Hidratante oBoticário NativaSPA Orquídea Noirre', descricao: 'hidratante muito bom conforme Isa Gomes.', imagem: 'imagens/download-99b9378a6d353568d617129529560690-1024-1024.png'},
      { id: 3, nome: 'Bola de vôlei do Wilson', descricao: 'wilson.', imagem: 'imagens/bola-volei-wilson-avp-soft-ball-vermelho-1.jpg' },
      { id: 4, nome: 'Chá Leão', descricao: 'chá leão gelado de pessêgo.', imagem: 'imagens/pessego-thumb2.png.webp' }
      
   ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Minha Lista de Produtos',
      itensParaProdutos: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
