var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Jubiscreido', comida: 'Batata frita.' },
      { id: 2, nome: 'Jamelão', comida: 'Jamelão' },
      { id: 3, nome: 'Guilherme', comida: 'Costela.' },
      { id: 4, nome: 'Ronaldo', comida: 'Peixe frito.' },
      { id: 5, nome: 'Bananilson Farofa da Silva', comida: 'Farofa de banana.' },
      { id: 6, nome: 'Pedro', comida: 'Hamburgi.' },
      { id: 7, nome: 'Léo', comida: 'Purê de batata.' },
      { id: 8, nome: 'Vanessa', comida: 'Qualquer coisa.' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus usuários',
      usuariosParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
