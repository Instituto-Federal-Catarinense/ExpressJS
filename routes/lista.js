const express = require('express');
const router = express.Router();

// Rota principal para renderizar nossa lista

router.get('/', (req, res) => {
  // 3. Dados dinâmicos (nosso vetor de elementos)
  const meusItens = [
    { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 2, nome: 'Item Beta', descricao: 'Descrição detalhada do Item Beta.' },
    { id: 3, nome: 'Item Gama', descricao: 'Descrição detalhada do Item Gama.' },
    { id: 4, nome: 'Item Delta', descricao: 'Descrição detalhada do Item Delta.' },
    { id: 5, nome: 'Item Épsilon', descricao: 'Descrição detalhada do Item Épsilon.' },
    { id: 6, nome: 'Item Zeta', descricao: 'Descrição detalhada do Item Zeta.' },
    { id: 7, nome: 'Item Eta', descricao: 'Descrição detalhada do Item Eta.' },
    { id: 8, nome: 'Item Teta', descricao: 'Descrição detalhada do Item Teta.' },
    { id: 9, nome: 'Item Iota', descricao: 'Descrição detalhada do Item Iota.' },
    { id: 10, nome: 'Item Kapa', descricao: 'Descrição detalhada do Item Kapa.' },
    { id: 11, nome: 'Item Lambda', descricao: 'Descrição detalhada do Item Lambda.' },
    { id: 12, nome: 'Item Mi', descricao: 'Descrição detalhada do Item Mi.' },
    { id: 13, nome: 'Item Ni', descricao: 'Descrição detalhada do Item Ni.' },
    { id: 14, nome: 'Item Xi', descricao: 'Descrição detalhada do Item Xi.' },
    { id: 15, nome: 'Item Ômicron', descricao: 'Descrição detalhada do Item Ômicron.' },
    { id: 16, nome: 'Item Pi', descricao: 'Descrição detalhada do Item Pi.' },
    { id: 17, nome: 'Item Rô', descricao: 'Descrição detalhada do Item Rô.' },
    { id: 18, nome: 'Item Sigma', descricao: 'Descrição detalhada do Item Sigma.' },
    { id: 19, nome: 'Item Tau', descricao: 'Descrição detalhada do Item Tau.' },
    { id: 20, nome: 'Item Upsilon', descricao: 'Descrição detalhada do Item Upsilon.' },
    { id: 21, nome: 'Item Fi', descricao: 'Descrição detalhada do Item Fi.' },
    { id: 22, nome: 'Item Chi', descricao: 'Descrição detalhada do Item Chi.' },
    { id: 23, nome: 'Item Psi', descricao: 'Descrição detalhada do Item Psi.' },
    { id: 24, nome: 'Item Ômega', descricao: 'Descrição detalhada do Item Ômega.' }
  ];





  // 4. Renderizar a view 'lista.ejs' passando os dados
  res.render('lista', {
    titulo: 'Minha Lista Dinâmica',
    itensParaView: meusItens // Passando o array para a view
  });
});

module.exports = router;
