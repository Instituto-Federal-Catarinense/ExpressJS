var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Lindo', tipo: '13.90.', preco: 'aaaaaaaaaaaaaaaaaa' },
      { id: 2, nome: 'Maravilhoso', tipo: '14.90.' , preco:'bbbbbbbbbbbbbbbbbbb' },
      { id: 3, nome: 'Gostoso', tipo: '15.90.',preco: 'cccccccccccccccccc' },
      { id: 4, nome: 'Delícia', tipo: '16.90.', preco: 'dddddddddddddddddd' },
      { id: 5, nome: 'Exuberante', tipo: '17.90.',preco:'eeeeeeeeeeeeeeeeee' },
      { id: 6, nome: 'Esplêndido', tipo: '18.90', preco: 'ffffffffffffffff' },
      { id: 7, nome: 'Especial', tipo: '19.90', preco:'gggggggggggggggg' },
      { id: 8, nome: 'Fenomenal', tipo: '99999999999999.00', preco:'hhhhhhhhhhhhhhhhhh' },
      { id: 9, nome: 'Incrível', tipo: '20.90', preco:'iiiiiiiiiiiiiiiiiii' },
      { id: 10, nome: 'Sensacional', tipo: '21.90', preco:'jjjjjjjjjjjjjjjj' },
      { id: 11, nome: 'Deslumbrante', tipo: '22.90', preco:'kkkkkkkkkkkkkkkk' },
      { id: 12, nome: 'Estonteante', tipo: '23.90', preco:'llllllllllllllllll' },
      { id: 13, nome: 'Maravilhoso', tipo: '24.90', preco:'mmmmmmmmmmmmmmmmmm' },
      { id: 14, nome: 'Deslumbrante', tipo: '25.90', preco:'nnnnnnnnnnnnnnnn' },
      { id: 15, nome: 'Estonteante', tipo: '26.90', preco:'oooooooooooooooooo' },
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus produtos lindos',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
