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
  { id: 5, nome: 'Item Épsilon', descricao: 'Item com a quinta letra do alfabeto grego.' },
  { id: 6, nome: 'Item Zeta', descricao: 'Explorando a letra Zeta.' },
  { id: 7, nome: 'Item Eta', descricao: 'Seguindo com a letra Eta.' },
  { id: 8, nome: 'Item Teta', descricao: 'A oitava letra do alfabeto grego.' },
  { id: 9, nome: 'Item Iota', descricao: 'Curto e simples: Iota.' },
  { id: 10, nome: 'Item Kapa', descricao: 'Item referente à letra Kapa.' },
  { id: 11, nome: 'Item Lambda', descricao: 'Lambda é a décima primeira letra.' },
  { id: 12, nome: 'Item Mi', descricao: 'Letra Mi, com som de "m".' },
  { id: 13, nome: 'Item Ni', descricao: 'Seguindo com a letra Ni.' },
  { id: 14, nome: 'Item Xi', descricao: 'Uma letra menos conhecida: Xi.' },
  { id: 15, nome: 'Item Ômicron', descricao: 'A letra que antecede Pi.' },
  { id: 16, nome: 'Item Pi', descricao: 'Famosa por seu uso em matemática.' },
  { id: 17, nome: 'Item Rô', descricao: 'Letra Rô, equivalente ao "R".' },
  { id: 18, nome: 'Item Sigma', descricao: 'Usada para somatórios em matemática.' },
  { id: 19, nome: 'Item Tau', descricao: 'Letra Tau, com som de "t".' },
  { id: 20, nome: 'Item Upsilon', descricao: 'A vigésima letra do alfabeto grego.' },
  { id: 21, nome: 'Item Fi', descricao: 'Letra com som de "f", muito usada em física.' },
  { id: 22, nome: 'Item Chi', descricao: 'Letra com som aspirado, como "kh".' },
  { id: 23, nome: 'Item Psi', descricao: 'Associada à mente e à psicologia.' },
  { id: 24, nome: 'Item Ômega', descricao: 'Última letra do alfabeto grego.' }
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
