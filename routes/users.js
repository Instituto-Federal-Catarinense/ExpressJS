var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Vinicius', Time: 'Internacional' },
      { id: 2, nome: 'Leop Pg', Time: 'Internacional' },
      { id: 3, nome: 'Kauezinho', Time: 'Flamengo' },
      { id: 4, nome: 'Mts dias', Time: 'Internacional' },
      { id: 5, nome: 'João Hélio', Time: 'Grêmio' },
      { id: 6, nome: 'Biny', Time: 'Grêmio' },
      { id: 7, nome: 'Gustavo Bez', Time: 'Internacional' },
      { id: 8, nome: 'Ruan Bauer', Time: 'Internacional' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus usuários',
      usuariosParaView: meusUsuarios// Passando o array para a view
    });
  });

  module.exports = router;
