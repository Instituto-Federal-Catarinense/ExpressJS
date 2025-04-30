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
      { id: 5, nome: 'Item Épsilon', descricao: 'O quinto elemento na sequência inspirada no grego.' },
     { id: 6, nome: 'Item Zeta', descricao: 'Mais um item seguindo o padrão do alfabeto grego.' },
  { id: 7, nome: 'Item Eta', descricao: 'Este é o sétimo item da nossa coleção grega.' },
  { id: 8, nome: 'Item Teta', descricao: 'O oitavo nome da série baseada no grego.' },
  { id: 9, nome: 'Item Iota', descricao: 'Nono componente da sequência alfabética grega.' },
  { id: 10, nome: 'Item Kapa', descricao: 'Décimo item seguindo a ordem do alfabeto grego.' },
  { id: 11, nome: 'Item Lambda', descricao: 'Um nome adicional vindo do idioma grego.' },
  { id: 12, nome: 'Item Mi', descricao: 'Item de número doze em nossa sequência.' },
  { id: 13, nome: 'Item Ni', descricao: 'Décimo terceiro item com inspiração no alfabeto grego.' },
  { id: 14, nome: 'Item Xi', descricao: 'O décimo quarto item com nome grego.' },
  { id: 15, nome: 'Item Ômicron', descricao: 'Mais um nome retirado do alfabeto grego tradicional.' },
  { id: 16, nome: 'Item Pi', descricao: 'Nomeado com uma famosa letra da matemática.' },
  { id: 17, nome: 'Item Rô', descricao: 'Este é o item de número dezessete da lista grega.' },
  { id: 18, nome: 'Item Sigma', descricao: 'Letra comum em fórmulas de somatórios matemáticos.' },
  { id: 19, nome: 'Item Tau', descricao: 'O item de número dezenove na nossa coleção.' },
  { id: 20, nome: 'Item Upsilon', descricao: 'Uma letra presente no final do alfabeto grego.' },
  { id: 21, nome: 'Item Fi', descricao: 'Letra com forte presença na matemática e física.' },
  { id: 22, nome: 'Item Chi', descricao: 'Item que faz parte da porção final da lista grega.' },
  { id: 23, nome: 'Item Psi', descricao: 'Penúltimo elemento da sequência alfabética grega.' },
  { id: 24, nome: 'Item Ômega', descricao: 'Último item, encerrando o alfabeto grego.' }
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
