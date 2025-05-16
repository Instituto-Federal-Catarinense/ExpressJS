var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'm18 gmc', descricao: '59 camelos' , url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/M18_hellcat_side.jpg/1200px-M18_hellcat_side.jpg"},
      { id: 2, nome: 't34', descricao: '1,50 e uma coxinha', url:"https://i.redd.it/fpwl2n68p93c1.jpg" },
      { id: 3, nome: 'f22 raptor', descricao:  'um mouse preto' , url:"https://aeromagazine.uol.com.br/media/uploads/lockheed_martin_f_22_raptor.jpg"},
      { id: 4, nome: 'm1a2 sep-v3', descricao:  'um almoço', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1g9Vd8Qq7HmE1QGzvrtavKBFkygx2tyW9A&s"},
      { id: 5, nome: 'leopard 2a8', descricao:  '1 aiphome 5', url:"https://www.forte.jor.br/wp-content/uploads/2025/05/Leopard_2A8-1024x683.webp" },
      { id: 6, nome: 't90', descricao:  'um chevette véio', url:"https://upload.wikimedia.org/wikipedia/commons/d/d9/T-90M.jpg" },
      { id: 7, nome: 'jagdtiger', descricao:  '3 opalas', url:"https://static.encyclopedia.warthunder.com/images/germ_panzerjager_tiger.png" },
      { id: 8, nome: 'tiger H1', descricao:  'um pc gamer', url:"https://i.redd.it/whats-your-guys-opinions-on-the-tiger-e-and-tiger-h1-at-5-7-v0-b02tl49qinwc1.jpg?width=4173&format=pjpg&auto=webp&s=f6a225063f95f3c18b2f2e6905f5f63dc33b1626" },
      { id: 9, nome: 'tiger 2H', descricao: '2 ps5', url:"https://preview.redd.it/r7ntnkjjbud81.jpg?auto=webp&s=ca5f0f762fa10d1af6b1ade645953bc33821f0ff" }
    ]
     
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
