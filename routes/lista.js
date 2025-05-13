var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Lamborghini', descricao: 'Descrição detalhada do Item Alfa.' },
      { id: 2, nome: 'Ferrari', descricao: 'O segundo item da nossa lista dinâmica.' },
      { id: 3, nome: 'Bugatti', descricao: 'Terceiro e último item exemplo.' },
      { id: 4, nome: 'koenigsegg', descricao: 'Mais um item para testar.' },
      { id: 5, nome: 'pagani', descricao: 'Mais um item para testar.' },
      { id: 6, nome: 'apollo', descricao: 'Mais um item para testar.' },
      { id: 7, nome: 'mclaren', descricao: 'Mais um item para testar.' },
      { id: 8, nome: 'porsche', descricao: 'Mais um item para testar.' },
      { id: 9, nome: 'rolls royce', descricao: 'Mais um item para testar.' }
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
