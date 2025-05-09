var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Giovanna', descricao: 'Alfa safada.' },
      { id: 2, nome: 'Giordana', descricao: 'Nana perfeita dona do meu coração.' },
      { id: 3, nome: 'Josias', descricao: 'Viado triste e melhor dupla de tcc fã de yabadabadooo.' },
      { id: 4, nome: 'Pietro', descricao: 'Viado triste burguês carente.' },
      { id: 5, nome: 'Leo', descricao: 'Viado gaymer fã de balatro e gemaplys.' },
      { id: 6, nome: 'Arthur', descricao: 'Viado?' },
      { id: 7, nome: 'Pâmela', descricao: 'Viada futebolista mi gente latina.' },
      { id: 8, nome: 'Vanessa', descricao: 'Viada musical com gosto questionável para homens.' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Meus Viados do coração',
      itensParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
