var express = require('express');
var router = express.Router();

// Rota principal para exibir a lista de produtos com imagens online
router.get('/', (req, res) => {
  const produtos = [
    { id: 1, nome: 'mão secadora deva curl', descricao: 'a paula stephania usa', imagem: 'https://a-static.mlcdn.com.br/800x560/deva-curl-deva-fuser-difusor-de-cabelo-tipo-mao/oliststore/mglflh4s5xhbz07s/3c7606c6fdf53bdab297fd1c16ceccd5.jpeg' },
    { id: 2, nome: 'creme - deva curl', descricao: 'muito bom e cheiroso!', imagem: 'https://static.dotcosmeticos.com.br/media/catalog/product/cache/1/thumbnail/450x450/040ec09b1e35df139433887a97daa66f/d/e/devacurl-stylingcream500.jpg' },
    { id: 3, nome: 'gel - deva curl', descricao: 'eu queria ter!', imagem: 'https://images.tcdn.com.br/img/img_prod/861496/deva_curl_angell_light_defining_gel_120ml_9381_1_4e0c7754465b138cc6f6b1d3e86ee56a.jpg' },
    { id: 4, nome: 'definição natural - salon line', descricao: 'fica com durinho de creme!', imagem: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5715213871376276164/products/32060_1.jpg&height=940&width=940' },
    { id: 5, nome: 'gelatina - salon line', descricao: '#babyhair', imagem: 'https://ikesaki.vtexassets.com/arquivos/ids/345316-800-auto?v=638666887076230000&width=800&height=auto&aspect=true' },
    { id: 6, nome: 'kit shampoo e condicionador - ácido hialurônico elseve', descricao: 'kit fav para lavar o cabelo', imagem: 'https://www.callfarma.com.br/_next/image?url=https%3A%2F%2Fd2lakedouw4zad.cloudfront.net%2Felseve-kit-sh375mlcond170ml-hidra-hialu-22998.png&w=640&q=75' },
    { id: 7, nome: 'oléo de argan - lola', descricao: 'o melhor de todos!', imagem: 'https://t41847.vteximg.com.br/arquivos/ids/10707313-1250-1250/leodeArganLola50ml.jpg?v=638811871974900000' },
    { id: 8, nome: 'grampos', descricao: 'ideal para penteados!', imagem: 'https://kissnewyork.vtexassets.com/arquivos/ids/168105-800-auto?v=638488041668330000&width=800&height=auto&aspect=true' },
    { id: 9, nome: 'borrachinhas - ricca', descricao: 'borrachinhas para penteado também!', imagem: 'https://lebiscuit.vtexassets.com/arquivos/ids/20931213/17292728731894.jpg?v=638666462498100000&width=400&height=400&format=webp&quality=75' },
    { id: 10, nome: 'esmalte cinza - impala', descricao: 'cor linda e versátil!', imagem: 'https://acdn-us.mitiendanube.com/stores/001/337/225/products/download-841-7d6b0856ac7f48bc8e16698340960125-640-0.webp' },
  ];

  res.render('produtos', {
    titulo: 'Lista de Produtos',
    produtosParaView: produtos
  });
});

module.exports = router;
