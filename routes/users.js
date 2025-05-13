var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  // 3. Dados dinâmicos (nosso vetor de elementos)
  const meusItens = [
    { id: 1, nome: 'Item Arthur', time: 'Inter' },
    { id: 2, nome: 'Item Léo', time: 'palmeiras' },
    { id: 3, nome: 'Item Márcio', time: 'Flamengo' },
    { id: 4, nome: 'Item Paralino', time: 'Gremio' },
    { id: 5, nome: 'Item Joelson', time: 'Vasco' },
    { id: 6, nome: 'Item Minerva', time: 'Boca Juniors Tocantins' },
    { id: 7, nome: 'Item Sarabtana', time: 'Nenhum' },
    { id: 8, nome: 'Item pindaiba', time: 'Nautico' }
  ];

  // 4. Renderizar a view 'lista.ejs' passando os dados
  // O segundo argumento de res.render() é um objeto.
  // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
  // variáveis disponíveis dentro do template EJS.
  res.render('usuarios', {
    titulo: 'meus usuários',
    usuariosParaView: meusUsuarios // Passando o array para a view
  });
});

module.exports = router;
