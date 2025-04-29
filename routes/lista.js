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
{ id: 5, nome: 'Item Épsilon', descricao: 'Explorando novos itens com Épsilon.' },
{ id: 6, nome: 'Item Zeta', descricao: 'Zeta continua a nossa sequência lógica.' },
{ id: 7, nome: 'Item Eta', descricao: 'O item Eta entra na lista.' },
{ id: 8, nome: 'Item Teta', descricao: 'Teta vem logo após Eta na sequência.' },
{ id: 9, nome: 'Item Iota', descricao: 'Pequeno mas importante: Iota.' },
{ id: 10, nome: 'Item Kapa', descricao: 'Kapa marca a metade da lista do alfabeto grego.' },
{ id: 11, nome: 'Item Lambda', descricao: 'Lambda adiciona elegância à lista.' },
{ id: 12, nome: 'Item Mi', descricao: 'Mi representa continuidade e organização.' },
{ id: 13, nome: 'Item Ni', descricao: 'Ni dá sequência ao nosso alfabeto.' },
{ id: 14, nome: 'Item Xi', descricao: 'Xi, um nome incomum e interessante.' },
{ id: 15, nome: 'Item Omicron', descricao: 'Omicron traz uma forma circular à lista.' },
{ id: 16, nome: 'Item Pi', descricao: 'Pi é matematicamente importante e popular.' },
{ id: 17, nome: 'Item Rô', descricao: 'Rô representa força na sequência.' },
{ id: 18, nome: 'Item Sigma', descricao: 'Sigma adiciona soma e significado.' },
{ id: 19, nome: 'Item Tau', descricao: 'Tau é o penúltimo da nossa série.' },
{ id: 20, nome: 'Item Ípsilon', descricao: 'Ípsilon encerra com estilo a sequência.' },
{ id: 21, nome: 'Item Fi', descricao: 'Fi inicia a reta final da lista grega.' },
{ id: 22, nome: 'Item Khi', descricao: 'Khi é símbolo de complexidade e beleza.' },
{ id: 23, nome: 'Item Psi', descricao: 'Psi adiciona profundidade psicológica à lista.' },
{ id: 24, nome: 'Item Ômega', descricao: 'Ômega, o fim do alfabeto e da nossa sequência.' }
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
