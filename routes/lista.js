var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
    { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 3, nome: 'Item Gama', descricao: 'Terceiro item da lista grega.' },
    { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
    { id: 5, nome: 'Item Épsilon', descricao: 'Item correspondente à letra Épsilon.' },
    { id: 6, nome: 'Item Zeta', descricao: 'Item correspondente à letra Zeta.' },
    { id: 7, nome: 'Item Eta', descricao: 'Item correspondente à letra Eta.' },
    { id: 8, nome: 'Item Teta', descricao: 'Item correspondente à letra Teta.' },
    { id: 9, nome: 'Item Iota', descricao: 'Item correspondente à letra Iota.' },
    { id: 10, nome: 'Item Kapa', descricao: 'Item correspondente à letra Kapa.' },
    { id: 11, nome: 'Item Lambda', descricao: 'Item correspondente à letra Lambda.' },
    { id: 12, nome: 'Item Mi', descricao: 'Item correspondente à letra Mi.' },
    { id: 13, nome: 'Item Ni', descricao: 'Item correspondente à letra Ni.' },
    { id: 14, nome: 'Item Xi', descricao: 'Item correspondente à letra Xi.' },
    { id: 15, nome: 'Item Ômicron', descricao: 'Item correspondente à letra Ômicron.' },
    { id: 16, nome: 'Item Pi', descricao: 'Item correspondente à letra Pi.' },
    { id: 17, nome: 'Item Rô', descricao: 'Item correspondente à letra Rô.' },
    { id: 18, nome: 'Item Sigma', descricao: 'Item correspondente à letra Sigma.' },
    { id: 19, nome: 'Item Tau', descricao: 'Item correspondente à letra Tau.' },
    { id: 20, nome: 'Item Upsilon', descricao: 'Item correspondente à letra Upsilon.' },
    { id: 21, nome: 'Item Fi', descricao: 'Item correspondente à letra Fi.' },
    { id: 22, nome: 'Item Chi', descricao: 'Item correspondente à letra Chi.' },
    { id: 23, nome: 'Item Psi', descricao: 'Item correspondente à letra Psi.' },
    { id: 24, nome: 'Item Ômega', descricao: 'Item correspondente à letra Ômega.' }
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
