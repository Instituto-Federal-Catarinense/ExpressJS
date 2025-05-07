var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // Dados dinâmicos com definição de cada letra grega
    const usuarios = [
      { id: 1, nome: 'Kamili Casagrande', idade: '17', pronome: 'gu' },
      { id: 2, nome: 'Brenda Arceno', idade: '16', pronome: 'eleela' },
      { id: 3, nome: 'Laura Rocha', idade: '17', pronome: 'gu' },
      { id: 4, nome: 'Rubia Mezzari', idade: '17', pronome: 'gu' },
      { id: 5, nome: 'Sandre Borges', idade: '43', pronome: 'neutro'}
    ];
  
    // Renderizar a view 'users.hbs' passando os dados
    res.render('users', {
      titulo: 'lista de usuários',
      usuariosParaView: usuarios
    });
});

module.exports = router;