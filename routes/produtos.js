var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Thaila Silvano possamai', descricao: '59 camelos' },
      { id: 2, nome: 'Emanuel Leal', descricao: '1,50 e uma coxinha' },
      { id: 3, nome: 'João Paulo', descricao: 'pago para comprarem' },
      { id: 4, nome: 'João Victor', descricao: '3.5 milhões (ele custa mais pq é gostoso)' },
      { id: 5, nome: 'Arthur Rene', descricao: '5 milhões (ele é foda)' },
      { id: 6, nome: 'Clara dos Santos de Matos', descricao: 'um chevette véio' },
      { id: 7, nome: 'Josias', descricao: '1,5 opalas' }
    ]
     
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
