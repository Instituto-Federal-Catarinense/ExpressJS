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
      { id: 5, nome: 'Item Épsilon', descricao: 'Quinto item da sequência grega.' },
      { id: 6, nome: 'Item Zeta', descricao: 'Mais um item seguindo o alfabeto grego.' },
      { id: 7, nome: 'Item Eta', descricao: 'Sétimo elemento da lista grega.' },
      { id: 8, nome: 'Item Teta', descricao: 'Oitavo item na ordem do alfabeto grego.' },
      { id: 9, nome: 'Item Iota', descricao: 'Nono item com nome grego.' },
      { id: 10, nome: 'Item Kapa', descricao: 'Décimo item da lista alfabética grega.' },
      { id: 11, nome: 'Item Lambda', descricao: 'Mais um nome vindo do grego.' },
      { id: 12, nome: 'Item Mi', descricao: 'Décimo segundo item da série.' },
      { id: 13, nome: 'Item Ni', descricao: 'Continuando o alfabeto grego com o item treze.' },
      { id: 14, nome: 'Item Xi', descricao: 'Décimo quarto elemento com nome grego.' },
      { id: 15, nome: 'Item Ômicron', descricao: 'Mais um item baseado no alfabeto grego.' },
      { id: 16, nome: 'Item Pi', descricao: 'Item com nome de letra famosa da matemática.' },
      { id: 17, nome: 'Item Rô', descricao: 'Décimo sétimo item da sequência grega.' },
      { id: 18, nome: 'Item Sigma', descricao: 'Letra muito usada em somatórios.' },
      { id: 19, nome: 'Item Tau', descricao: 'Décimo nono da lista.' },
      { id: 20, nome: 'Item Upsilon', descricao: 'Letra que aparece no alfabeto grego tardio.' },
      { id: 21, nome: 'Item Fi', descricao: 'Mais uma letra com aplicação matemática.' },
      { id: 22, nome: 'Item Chi', descricao: 'Item da parte final do alfabeto grego.' },
      { id: 23, nome: 'Item Psi', descricao: 'Penúltimo item da lista grega.' },
      { id: 24, nome: 'Item Ômega', descricao: 'Último item do alfabeto grego.' }
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
