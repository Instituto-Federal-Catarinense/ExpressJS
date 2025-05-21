var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
  // 3. Dados dinâmicos (nosso vetor de elementos)
  const meusUsuarios = [
    { id: 1, nome: 'Vôlei', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 2, nome: 'Futsal', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 3, nome: 'Badminton', descricao: 'Terceiro e último item exemplo.' },
    { id: 4, nome: 'Handebol', descricao: 'Mais um item para testar.' },
    { id: 5, nome: 'Tênis', descricao: 'Outro item para testar.' },
    { id: 6, nome: 'Futbol', descricao: 'Mais um item para testar.' },
    { id: 4, nome: 'Handebol', descricao: 'Mais um item para testar.' },
    { id: 4, nome: 'Tênis', descricao: 'Outro item para testar.' },
    { id: 4, nome: 'Futbol', descricao: 'Mais um item para testar.' }
  ];

  // 4. Renderizar a view 'lista.ejs' passando os dados
  // O segundo argumento de res.render() é um objeto.
  // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
  // variáveis disponíveis dentro do template EJS.
  res.render('usuarios', {
    titulo: 'Minha Lista Dinâmica',
    itensParaView: meusItens // Passando o array para a view
  });
});

module.exports = router;
