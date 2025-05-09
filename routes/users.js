var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'mario', descricao: 'qual mario?' },
      { id: 2, nome: 'alex', descricao: 'qual alex?' },
      { id: 3, nome: 'dani', descricao: 'qual dani?' },
      { id: 4, nome: 'roberto', descricao: 'qual robeto?' },
      { id: 5, nome: 'bruno', descricao: 'qual bruno?' },
      { id: 6, nome: 'gi', descricao: 'qual gi?' },
      { id: 7, nome: 'fe', descricao: 'qual fe?' }
    ]
     
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('users', {
      titulo: 'Minha Lista Dinâmica',
      usuariosParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
