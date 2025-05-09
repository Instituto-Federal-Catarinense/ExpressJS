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
      { id: 5, nome: 'Item Épsilon', descricao: 'Mais um item' },
      { id: 6, nome: 'Item  Zeta', descricao: 'Mais um item' },
      { id: 7, nome: 'Item  Eta', descricao: 'Mais um item' },             
      { id: 8, nome: 'Item  Teta', descricao: 'Mais um item' },
      { id: 9, nome: 'Item  Iota', descricao: 'Mais um item' },
      { id: 10, nome: 'Item  Kappa', descricao: 'Mais um item' },
      { id: 11, nome: 'Item  Lambda', descricao: 'Mais um item' },
      { id: 12, nome: 'Item  Mü', descricao: 'Mais um item' },
      { id: 13, nome: 'Item  Ni', descricao: 'Mais um item' },
      { id: 14, nome: 'Item  Xi', descricao: 'Mais um item' },
      { id: 15, nome: 'Item  Ômicron', descricao: 'Mais um item' },
      { id: 16, nome: 'Item Pi', descricao: 'Mais um item' },
      { id: 17, nome: 'Item  Rho', descricao: 'Mais um item' },
      { id: 18, nome: 'Item  Sigma', descricao: 'Mais um item' },
      { id: 19, nome: 'Item  Tau', descricao: 'Mais um item' },
      { id: 20, nome: 'Item Fi', descricao: 'Mais um item' },
      { id: 21, nome: 'Item  Chi', descricao: 'Mais um item' },
      { id: 22, nome: 'Item  Psi', descricao: 'Mais um item' },
      { id: 23, nome: 'Item  Ômega', descricao: 'Mais um item' }
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
