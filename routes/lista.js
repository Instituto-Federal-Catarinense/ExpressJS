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
      { id: 5, nome: 'Item Épsilon', descricao: 'Versão melhorada de um item fundamental.' },
      { id: 6, nome: 'Item Zeta', descricao: 'Item que otimiza o fluxo de trabalho.' }, 
      { id: 7, nome: 'Item Eta', descricao: 'Essencial para o crescimento e adaptação.' },
      { id: 8, nome: 'Item Teta', descricao: 'Item altamente eficaz para tarefas complexas.' },
      { id: 9, nome: 'Item Iota', descricao: 'Perfeito para ajustes finos e precisão.' },
      { id: 10, nome: 'Item Capa', descricao: 'Item que oferece proteção e resistência.' },
      { id: 11, nome: 'Item Lambda', descricao: 'Utilizado para estabilizar processos internos.' },
      { id: 12, nome: 'Item Mi', descricao: 'Item versátil, adaptável a várias situações.' },
      { id: 13, nome: 'Item Ni', descricao: 'Item que promove a inovação contínua.' },
      { id: 14, nome: 'Item Xi', descricao: 'Item raro, utilizado apenas em casos específicos.' },
      { id: 15, nome: 'Item Omicron', descricao: 'Item compacto com grandes capacidades.' },
      { id: 16, nome: 'Item Pi', descricao: 'Item ideal para maximizar eficiência em curto prazo.' },
      { id: 17, nome: 'Item Rô', descricao: 'Peça chave no ajuste de sistemas avançados.' },
      { id: 18, nome: 'Item Sigma', descricao: 'Item crucial para análise e tomada de decisões.' },
      { id: 19, nome: 'Item Tau', descricao: 'Item projetado para aumentar a precisão em operações.' },
      { id: 20, nome: 'Item Upsilon', descricao: 'Um item complexo, mas com grande potencial.' },
      { id: 21, nome: 'Item Fi', descricao: 'Item com foco em otimização energética.' },
      { id: 22, nome: 'Item Qui', descricao: 'Produto de alto desempenho, ideal para testes rigorosos.' },
      { id: 23, nome: 'Item Psi', descricao: 'Item que auxilia na melhoria do desempenho mental.' },
      { id: 24, nome: 'Item Ômega', descricao: 'O item final que integra todos os elementos anteriores.' }
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