var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
  { id: 1, nome: 'LeBron James', descricao: 'Dominante em várias eras da NBA.' },
  { id: 2, nome: 'Michael Jordan', descricao: 'Considerado o maior jogador de todos os tempos.' },
  { id: 3, nome: 'Kobe Bryant', descricao: 'Ícone dos Lakers com mentalidade vencedora.' },
  { id: 4, nome: 'Magic Johnson', descricao: 'Revolucionou a posição de armador.' },
  { id: 5, nome: 'Larry Bird', descricao: 'Rival lendário de Magic nos anos 80.' },
  { id: 6, nome: 'Kareem Abdul-Jabbar', descricao: 'Maior pontuador da história por décadas.' },
  { id: 7, nome: 'Shaquille O’Neal', descricao: 'Domínio físico absoluto nos anos 2000.' },
  { id: 8, nome: 'Tim Duncan', descricao: 'O "Big Fundamental" dos Spurs.' },
  { id: 9, nome: 'Bill Russell', descricao: '11 títulos e lenda defensiva.' },
  { id: 10, nome: 'Wilt Chamberlain', descricao: 'Recordista de 100 pontos em um jogo.' }
];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Minha Lista Dinâmica',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
