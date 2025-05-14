var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const usuarios = [
      { id: 1, nome: 'Dário', perfil: 'Descrição detalhada do usuário.' },
      { id: 2, nome: 'Romário', perfil:'Descrição detalhada do usuário.' },
      { id: 3, nome: 'Amário', perfil: 'Descrição detalhada do usuário.' },
      { id: 4, nome: 'Mario', perfil: 'Descrição detalhada do usuário.' },
      { id: 5, nome: 'Januário', perfil: 'Descrição detalhada do usuário.' },
      { id: 6, nome: 'Gregório', perfil: 'Descrição detalhada do usuário.' },
      { id: 7, nome: 'Victório', perfil: 'Descrição detalhada do usuário.' },
      { id: 8, nome: 'Muhamed', perfil: 'Descrição detalhada do usuário.' },
      { id: 9, nome: 'Ashaad', perfil: 'Descrição detalhada do usuário.' },
      { id: 10, nome: 'kairu', perfil: 'Descrição detalhada do usuário.' },
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('users', {
      titulo: 'Lista de Usuários',
      usuariosParaView: usuarios // Passando o array para a view
    });
  });

  module.exports = router;
