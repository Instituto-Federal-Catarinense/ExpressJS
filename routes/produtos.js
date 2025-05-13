var express = require('express');
var router = express.Router();

// Rota principal para renderizar a lista de produtos de supermercado
router.get('/', (req, res) => {
  const produtos = [
    {
      id: 1,
      nome: 'Arroz',
      descricao: 'Pacote de 5kg de arroz branco tipo 1.',
      imagem: 'https://m.media-amazon.com/images/I/71rBEHnIkXL.jpg'
    },
    {
      id: 2,
      nome: 'Feijão',
      descricao: 'Feijão carioca tipo 1, pacote 500g.',
      imagem: 'https://t75282.vteximg.com.br/arquivos/ids/155991-2000-2000/185_feijao_mulatinho_500g.jpg?v=638338518728830000'
    },
    {
      id: 3,
      nome: 'Óleo de Soja',
      descricao: 'Garrafa de 900ml de óleo de soja refinado.',
      imagem: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/218780/Oleo-de-Soja-Concordia-Garrafa-900ml.png?v=638634056258000000'
    },
    {
      id: 4,
      nome: 'Açúcar',
      descricao: 'Açúcar cristal refinado 5kg.',
      imagem: 'https://centraldealimentos.cdn.magazord.com.br/img/2024/12/produto/4542/docesuca.jpeg?ims=fit-in/600x600/filters:fill(white)'
    },
    {
      id: 5,
      nome: 'Leite',
      descricao: 'Leite integral UHT 1L.',
      imagem: 'https://giassi.vtexassets.com/arquivos/ids/2755936/Leite-UHT-Integral-Tirol-Caixa-1l.png?v=638627525975330000'
    },
    {
      id: 6,
      nome: 'Café',
      descricao: 'Café torrado e moído, pacote de 500g.',
      imagem: 'https://ibassets.com.br/ib.item.image.big/b-6543b2e413f84ebf8b08920a07404ef9.jpeg'
    },
    {
      id: 7,
      nome: 'Detergente',
      descricao: 'Detergente líquido para louça 500ml.',
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/289/535/products/7908324400373_11-6235aae77df4a914a416323144068094-480-0.png'
    },
    {
      id: 8,
      nome: 'Sabão em Pó',
      descricao: 'Sabão em pó para roupas, embalagem de 1kg.',
      imagem: 'https://baratao.agilecdn.com.br/990326_1.jpg'
    },
    {
      id: 9,
      nome: 'Papel Higiênico',
      descricao: 'Pacote com 12 rolos de papel higiênico.',
      imagem: 'https://images.tcdn.com.br/img/img_prod/613137/papel_higienico_folha_simples_30m_fardo_com_12_rolos_fofinho_1191_1_6c2b0514b4a2183b3af83a2a80d7bfc1.jpg'
    },
    {
      id: 10,
      nome: 'Macarrão',
      descricao: 'Macarrão tipo espaguete, pacote de 500g.',
      imagem: 'https://mercantilatacado.vtexassets.com/arquivos/ids/170075/654a313a75d9096810e2c0a6.jpg?v=638349578860000000'
    }
  ];

  res.render('produtos', {
    titulo: 'Lista de Produtos de Supermercado',
    produtosParaView: produtos
  });
});

module.exports = router;