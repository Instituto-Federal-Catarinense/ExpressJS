var express = require('express');
var router = express.Router();

// Rota para listar nomes populares no Brasil
router.get('/', (req, res) => {
  // Dados dinâmicos com nomes populares no Brasil
  const meusItensNomes = [
    { id: 1, nome: 'Maria', descricao: 'Nome feminino muito popular no Brasil.' },
    { id: 2, nome: 'João', descricao: 'Nome masculino tradicional e amplamente utilizado.' },
    { id: 3, nome: 'Ana', descricao: 'Nome simples e comum, especialmente no Brasil.' },
    { id: 4, nome: 'Pedro', descricao: 'Nome masculino clássico e bastante conhecido.' },
    { id: 5, nome: 'Lucas', descricao: 'Nome popular, associado à tradição cristã.' },
    { id: 6, nome: 'Gabriel', descricao: 'Nome de origem bíblica e muito comum no Brasil.' },
    { id: 7, nome: 'Juliana', descricao: 'Nome feminino amplamente utilizado em diversas gerações.' },
    { id: 8, nome: 'Carlos', descricao: 'Nome masculino clássico e popular no Brasil.' },
    { id: 9, nome: 'Fernanda', descricao: 'Nome feminino muito comum entre as gerações passadas e atuais.' },
    { id: 10, nome: 'Rafael', descricao: 'Nome associado à tradição religiosa e muito popular.' },
    { id: 11, nome: 'Luana', descricao: 'Nome feminino que tem crescido em popularidade no Brasil.' },
    { id: 12, nome: 'Gustavo', descricao: 'Nome masculino tradicional e muito utilizado.' },
    { id: 13, nome: 'Camila', descricao: 'Nome feminino que se destaca entre as novas gerações.' },
    { id: 14, nome: 'Ricardo', descricao: 'Nome masculino muito presente nas famílias brasileiras.' },
    { id: 15, nome: 'Beatriz', descricao: 'Nome feminino com forte presença no Brasil.' },
    { id: 16, nome: 'Felipe', descricao: 'Nome masculino comum e amplamente utilizado.' },
    { id: 17, nome: 'Luiz', descricao: 'Nome masculino tradicional, associado à realeza em sua origem.' },
    { id: 18, nome: 'Tatiane', descricao: 'Nome feminino popular, especialmente nas décadas de 90 e 2000.' },
    { id: 19, nome: 'Bruna', descricao: 'Nome feminino com grande popularidade no Brasil.' },
    { id: 20, nome: 'Marcos', descricao: 'Nome masculino muito utilizado em todas as faixas etárias.' },
    { id: 21, nome: 'Fernanda', descricao: 'Outro nome muito popular, especialmente nas décadas passadas.' },
    { id: 22, nome: 'Roberta', descricao: 'Nome feminino clássico e com grande presença no Brasil.' },
    { id: 23, nome: 'Amanda', descricao: 'Nome feminino comum e presente em muitas famílias brasileiras.' },
    { id: 24, nome: 'Eduardo', descricao: 'Nome masculino tradicional e muito popular no Brasil.' }
  ];

  // Renderizando a página com os dados
  res.render('users', {
    titulo: 'Minha Lista Dinâmica de Nomes',
    usuariosParaView: meusItensNomes // Passando o array para a view
  });
});

module.exports = router;