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
      { id: 5, nome: 'Item Epsilon', descricao: 'item acrecentado.' },
      { id: 6, nome: 'Item Zeta', descricao: 'item acrescentado.' },
      { id: 7, nome: 'Item Eta', descricao: 'item acrescentado.' },
      { id: 8, nome: 'Item Theta', descricao: 'item acrescentado.' },
      { id: 9, nome: 'Item Iota', descricao: 'item acrescentado.' },
      { id: 10, nome: 'Item Kappa', descricao: 'item acrescentado.' },
      { id: 11, nome: 'Item Lambda', descricao: 'item acrescentado.' },
      { id: 12, nome: 'Item Mu', descricao: 'item acrescentado.' },
      { id: 13, nome: 'Item Nu', descricao: 'item acrescentado.' },
      { id: 14, nome: 'Item Xi', descricao: 'item acrescentado.' },
      { id: 15, nome: 'Item Omicron', descricao: 'item acrescentado.' },
      { id: 16, nome: 'Item Pi', descricao: 'item acrescentado.' },
      { id: 17, nome: 'Item Rho', descricao: 'item acrescentado.' },
      { id: 18, nome: 'Item Sigma', descricao: 'item acrescentado.' },
      { id: 19, nome: 'Item Tau', descricao: 'item acrescentado.' },
      { id: 20, nome: 'Item Upsilon', descricao: 'item acrescentado.' },
      { id: 21, nome: 'Item Phi', descricao: 'item acrescentado.' },
      { id: 22, nome: 'Item Chi', descricao: 'item acrescentado.' },
      { id: 23, nome: 'Item Psi', descricao: 'item acrescentado.' },
      { id: 24, nome: 'Item Omega', descricao: 'item acrescentado.' }
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
