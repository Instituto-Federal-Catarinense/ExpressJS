var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
      { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
      { id: 3, nome: 'Item Gama', descricao: 'Terceiro e último item exemplo.' },
      { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
      { id: 5, nome: 'Item Epsilon', descricao: 'Mais um item para testarr.' },
      { id: 6, nome: 'Item Zeta', descricao: 'Mais um item para testarrr.' },
      { id: 7, nome: 'Item Eta', descricao: 'Mais um item para testarrrr.' },
      { id: 8, nome: 'Item Teta', descricao: 'Mais um item para testarrrrr.' },
      { id: 9, nome: 'Item Iota', descricao: 'Mais um item para testarrrrrr.' },
      { id: 10, nome: 'Item Capa', descricao: 'Mais um item para testarrrrrrr.' },
      { id: 11, nome: 'Item Lambda', descricao: 'Mais um item para testarrrrrrrr.' },
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
