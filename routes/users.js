var express = require('express');
var router = express.Router();

// Rota principal para exibir a lista de usuários com imagens online
router.get('/', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Luísa França', descricao: 'mimosa & pomposa & queen & amiga da rubia', imagem: 'https://disneyplusbrasil.com.br/wp-content/uploads/2023/10/Princesa-Tiana-com-cabelos-soltos.jpg' },
    { id: 2, nome: 'Rubia Mezzari', descricao: 'querida & sorridente & melhor amiga de todas as horas global da luísa', imagem: 'https://i.pinimg.com/736x/d7/2a/f6/d72af6ee2942b220c41e4c6638898adb.jpg' },
    { id: 3, nome: 'Kamili Bozello', descricao: 'comk & bos & amór & miga rubia também', imagem: 'https://pm1.aminoapps.com/6389/f779271f548ec386b0bcef0979d7eb594d8d9f4f_00.jpg' },
    { id: 4, nome: 'Brenda Arceno', descricao: 'cabelos rosas & tesoureira & gu & marco antonio & sotério', imagem: 'https://i.ytimg.com/vi/Pir5j9x4ij4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHM8r9ygdxA-FK9PRDY3lAjfctBQ' },
    { id: 5, nome: 'Maria Paganini', descricao: 'diamante da temporada & paganini & gênia % jardel', imagem: 'https://preview.redd.it/which-of-rapunzels-hairstyles-is-the-best-long-hair-braid-w-v0-u5kl0apw1esd1.jpg?width=500&format=pjpg&auto=webp&s=4d96d7f9d7b7aa448afe197aff5416c6d8cbf294' },
    { id: 6, nome: 'Usuário 6', descricao: 'Descrição do Usuário 6', imagem: 'https://via.placeholder.com/150?text=Usuário+6' },
    { id: 7, nome: 'Usuário 7', descricao: 'Descrição do Usuário 7', imagem: 'https://via.placeholder.com/150?text=Usuário+7' },
    { id: 8, nome: 'Usuário 8', descricao: 'Descrição do Usuário 8', imagem: 'https://via.placeholder.com/150?text=Usuário+8' },
    { id: 9, nome: 'Usuário 9', descricao: 'Descrição do Usuário 9', imagem: 'https://via.placeholder.com/150?text=Usuário+9' },
    { id: 10, nome: 'Usuário 10', descricao: 'Descrição do Usuário 10', imagem: 'https://via.placeholder.com/150?text=Usuário+10' },
  ];

  res.render('users', {
    titulo: 'Lista de Usuários',
    usuariosParaView: usuarios
  });
});

module.exports = router;
