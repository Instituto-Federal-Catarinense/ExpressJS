var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Thaila', hobbie: 'Ler sagas de fantasia' },
      { id: 2, nome: 'Clara', hobbie: 'Ler e pintar' },
      { id: 3, nome: 'João', hobbie: 'Ir à academia' },
      { id: 4, nome: 'Emanuel', hobbie: 'Tocar saxofone' },
      { id: 5, nome: 'Isabele', hobbie: 'Jogar vôlei' },
      { id: 6, nome: 'Pietro', hobbie: 'Fazer gravura' },
      { id: 7, nome: 'Léo', hobbie: 'Tocar bateria' },
      { id: 8, nome: 'Arthur', hobbie: 'Tocar teclado' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus Usuários',
      usuariosParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
