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
      { id: 5, nome: 'Item Epsilion', descricao: 'Novo item de teste.'},
      { id: 6, nome: 'Item Zeta', descricao: 'Novo item de teste.'},
      { id: 7, nome: 'Item Ita', descricao: 'Novo item de teste.'},
      { id: 8, nome: 'Item Fita', descricao: 'Novo item de teste.'},
      { id: 9, nome: 'Item Iota', descricao: 'Novo item de teste.'},
      { id: 10, nome: 'Item Lota', descricao: 'Novo item de teste.'},
      { id: 11, nome: 'Item Capa', descricao: 'Novo item de teste.'},
      { id: 12, nome: 'Item Lambda', descricao: 'Novo item de teste.'},
      { id: 13, nome: 'Item Mi', descricao: 'Novo item de teste.'},
      { id: 14, nome: 'Item Ni', descricao: 'Novo item de teste.'},
      { id: 15, nome: 'Item Fi', descricao: 'Novo item de teste.'}
      
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
