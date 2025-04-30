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
      { id: 5, nome: 'Item Épilson', descricao: 'Mais um item para testar.' },
      { id: 6, nome: 'Item Zeta', descricao: 'Mais um item para testar.' },
      { id: 7, nome: 'Item Eta', descricao: 'Mais um item para testar.' },
      { id: 8, nome: 'Item Teta', descricao: 'Mais um item para testar.' },
      { id: 9, nome: 'Item Iota', descricao: 'Mais um item para testar.' },
      { id: 10, nome: 'Item Kappa', descricao: 'Mais um item para testar.' },
      { id: 11, nome: 'Item Lambda', descricao: 'Mais um item para testar.' },
      { id: 12, nome: 'Item Mu', descricao: 'Mais um item para testar.' },
      { id: 13, nome: 'Item Ni', descricao: 'Mais um item para testar.' },
      { id: 14, nome: 'Item Omicron', descricao: 'Mais um item para testar.' },
      { id: 15, nome: 'Item Xi', descricao: 'Mais um item para testar.' },
      { id: 16, nome: 'Item Pi', descricao: 'Mais um item para testar.' },
      { id: 17, nome: 'Item Rho', descricao: 'Mais um item para testar.' },
      { id: 18, nome: 'Item Sigma', descricao: 'Mais um item para testar.' },
      { id: 19, nome: 'Item Tau', descricao: 'Mais um item para testar.' },
      { id: 20, nome: 'Item Ípilson', descricao: 'Mais um item para testar.' },
      { id: 21, nome: 'Item Fi', descricao: 'Mais um item para testar.' },
      { id: 22, nome: 'Item Qui', descricao: 'Mais um item para testar.' },
      { id: 23, nome: 'Item Psi', descricao: 'Mais um item para testar.' },
      { id: 24, nome: 'Item Omêga', descricao: 'Mais um item para testar.' }
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
