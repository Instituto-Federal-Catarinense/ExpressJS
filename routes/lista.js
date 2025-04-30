var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
   const meusItens = [
  { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
  { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
  { id: 3, nome: 'Item Gama', descricao: 'Terceiro item com nome grego.' },
  { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
  { id: 5, nome: 'Item Épsilon', descricao: 'Item com nome da quinta letra grega.' },
  { id: 6, nome: 'Item Zeta', descricao: 'Nome baseado na sexta letra do alfabeto grego.' },
  { id: 7, nome: 'Item Eta', descricao: 'Mais um item com letra grega clássica.' },
  { id: 8, nome: 'Item Teta', descricao: 'Nome derivado da oitava letra do grego.' },
  { id: 9, nome: 'Item Iota', descricao: 'Pequeno mas importante, o item Iota.' },
  { id: 10, nome: 'Item Kapa', descricao: 'Item com nome forte da letra Kapa.' },
  { id: 11, nome: 'Item Lambda', descricao: 'Lambda, muito usado em física e matemática.' },
  { id: 12, nome: 'Item Mi', descricao: 'A décima segunda letra do alfabeto grego.' },
  { id: 13, nome: 'Item Ni', descricao: 'Letra associada a muitas fórmulas científicas.' },
  { id: 14, nome: 'Item Xi', descricao: 'Curiosa letra que aparece na metade do alfabeto.' },
  { id: 15, nome: 'Item Omicron', descricao: 'Item com nome de letra similar ao "o".' },
  { id: 16, nome: 'Item Pi', descricao: 'Famosa letra usada em matemática (π).' },
  { id: 17, nome: 'Item Rô', descricao: 'Representa o "r" grego, muito usado em fórmulas.' },
  { id: 18, nome: 'Item Sigma', descricao: 'Sigma, símbolo de somatório em matemática.' },
  { id: 19, nome: 'Item Tau', descricao: 'Letra forte e direta, usada em física.' },
  { id: 20, nome: 'Item Upsilon', descricao: 'Nome derivado da vigésima letra grega.' },
  { id: 21, nome: 'Item Fi', descricao: 'Letra associada ao número áureo (φ).' },
  { id: 22, nome: 'Item Qui', descricao: 'Letra com som forte, comum em estatística.' },
  { id: 23, nome: 'Item Psi', descricao: 'Item com nome da penúltima letra grega.' },
  { id: 24, nome: 'Item Ômega', descricao: 'Último item, assim como a última letra grega.' }
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
