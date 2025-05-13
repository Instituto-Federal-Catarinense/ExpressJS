var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Sotério', foto: '/imagens/soterio.jpg' },
      { id: 2, nome: 'Joédio', foto: '/imagens/joedio.jpg' },
      { id: 3, nome: 'Thaís', foto: '/imagens/thais.jpg' },
      { id: 4, nome: 'Jeferson', foto: '/imagens/jeferson.jpg' },
      { id: 5, nome: 'Jardel', foto: '/imagens/jardel.png' },
  
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('users', {
      titulo: 'Minha Lista Usuarios',
      usersParaView: meusUsuarios // Passando o array para a view
    });
  });


module.exports = router;
