var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Batata Inglesa', url: 'https://superprix.vteximg.com.br/arquivos/ids/178620/Batata-Especial-1kg.png?v=636857520320030000', preco:'R$6,00' },
      { id: 2, nome: 'Banana', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlL6yoi89pGz-08CupN6qSa8NYH1CV5qxvA&s', preco:'R$3,00' },
      { id: 3, nome: 'Arroz', url: 'https://images.tcdn.com.br/img/img_prod/1185374/arroz_branco_889_1_66d9f11abe0968f08f849ae0c17773b9_20230324090330.png', preco:'R$10,00' },
      { id: 4, nome: 'Feijão', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6CnOx48rlEdf1Cm-2IGbNy5SSy5OEV-Bgg&s', preco:'R$12,00' },
      { id: 5, nome: 'Antonov an-225', url: 'https://limahobbies.vteximg.com.br/arquivos/ids/165369/REV04958-01-2-ANTONOV-NA-225-MRIJA-1-144-REV04958.jpg?v=637092108471530000', preco:'R$16.000,00' },
      { id: 6, nome: 'Cenoura', url: 'https://www.quitandatomio.com.br/upload/408933518-7-beneficios-da-cenoura-para-saude.jpg', preco:'R$4,00' },
      { id: 7, nome: 'Chocolate', url: 'https://cdn.dooca.store/8374/products/bs6qjyf9nxeq46ebjcu16vmcp80pobqhktw5_450x600+fill_ffffff.jpg?v=1690312088&webp=0', preco:'R$12,00' },
      { id: 8, nome: 'Café', url: 'https://cdn.awsli.com.br/2500x2500/2216/2216236/produto/150442043a97e4c34a9.jpg', preco:'R$16.001,00' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus Produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
