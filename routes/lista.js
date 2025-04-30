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
   { id: 5, nome: 'Item Épsilon', descricao: 'Item representando a quinta letra do alfabeto grego.' },
   { id: 6, nome: 'Item Zeta', descricao: 'Elemento que segue o Épsilon na sequência grega.' },
   { id: 7, nome: 'Item Eta', descricao: 'Item de número sete, nomeado como a letra Eta.' },
   { id: 8, nome: 'Item Teta', descricao: 'Oitavo item da lista, com nome derivado da letra Teta.' },
   { id: 9, nome: 'Item Iota', descricao: 'Pequeno mas importante, o nono item: Iota.' },
   { id: 10, nome: 'Item Kapa', descricao: 'Décimo item representando a letra Kapa.' },
   { id: 11, nome: 'Item Lambda', descricao: 'Item número onze com nome da letra Lambda.' },
   { id: 12, nome: 'Item Mi', descricao: 'Doze na contagem, este é o Item Mi.' },
   { id: 13, nome: 'Item Ni', descricao: 'Décimo terceiro item nomeado como Ni.' },
   { id: 14, nome: 'Item Xi', descricao: 'O Item Xi ocupa a décima quarta posição.' },
   { id: 15, nome: 'Item Ômicron', descricao: 'Quinze na lista, este é o Ômicron.' },
   { id: 16, nome: 'Item Pi', descricao: 'Item com nome da famosa constante matemática: Pi.' },
   { id: 17, nome: 'Item Rô', descricao: 'Décimo sétimo elemento com nome Rô.' },
   { id: 18, nome: 'Item Sigma', descricao: 'Item número dezoito com o nome Sigma.' },
   { id: 19, nome: 'Item Tau', descricao: 'Tau é o nome do décimo nono item da lista.' },
   { id: 20, nome: 'Item Upsilon', descricao: 'Item vinte, nomeado como a letra Upsilon.' },
   { id: 21, nome: 'Item Fi', descricao: 'Este é o Fi, item vinte e um na sequência grega.' },
   { id: 22, nome: 'Item Chi', descricao: 'Item Chi, com o número vinte e dois na lista.' },
   { id: 23, nome: 'Item Psi', descricao: 'Penúltimo item, Psi representa a letra vinte e três.' },
   { id: 24, nome: 'Item Ômega', descricao: 'Finalmente, o vigésimo quarto item: Ômega.' }
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
