var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    const meusItens = [
      { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
      { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
      { id: 3, nome: 'Item Gama', descricao: 'Terceiro e último item exemplo.' },
      { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
      { id: 5, nome: 'Item Épsilon', descricao: 'O quinto item, representando a letra Épsilon.' },
      { id: 6, nome: 'Item Zeta', descricao: 'O sexto item, agora com a letra Zeta.' },
      { id: 7, nome: 'Item Eta', descricao: 'Sétimo item, letra Eta do alfabeto grego.' },
      { id: 8, nome: 'Item Teta', descricao: 'Oitavo item, letra Teta.' }
    ];
  
    // Renderizar a view 'lista.pug' passando os dados
    res.render('lista', {
      titulo: 'Minha Lista Dinâmica',
      itensParaView: meusItens
    });
});

module.exports = router;
