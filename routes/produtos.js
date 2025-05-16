var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, produto: 'Geladeira', valor: 'R$3000,00', url:"https://cf.agilecdn.com.br/geladeira-electrolux-frost-free-inverter-410listros-efficient-autosense-duplex-cor-inox-look-if45s_681756.png?v=28-1436232613" },
      { id: 2, produto: 'Forno', valor: 'R$499,90', url:"https://suggar.fbitsstatic.net/img/p/forno-eletrico-de-bancada-42-litros-preto-suggar-64008/230740-5.jpg?w=1200&h=1200&v=no-value" },
      { id: 3, produto: 'TV', valor: 'R$4990,90', url:"https://sipolatti.vtexassets.com/arquivos/ids/198752/SAMSUNG-SMART-TV-TIZEN-FHD-T5300.jpg?v=638084293941770000" },
      { id: 4, produto: 'Videogame', valor: 'R$3890,00', url:"https://carrefourbr.vtexassets.com/arquivos/ids/182424245/3438716_1.jpg.jpg?v=638721360765600000" },
      { id: 5, produto: 'Computador', valor: 'R$6550,00', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XY54ZV8FfD8ELnDh0adc4sbBOahzHlOvyQ&s" },
      { id: 6, produto: 'Sabonete', valor: 'R$2,99', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmf943_d7NfafYjxZ9S3ma2DqEHbzp2fP1fA&s" },
      { id: 7, produto: 'Mouse', valor: 'R$199,90', url:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-320m-mouse/assets/mouse-alienware-aw320m-black-gallery-5.psd?fmt=pjpg&pscan=auto&scl=1&wid=2159&hei=1540&qlt=100,1&resMode=sharp2&size=2159,1540&chrss=full&imwidth=5000" },
      { id: 8, produto: 'Teclado', valor: '150,50', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvD1eVMW6iy3RlR6oxLhWSSCgrF272B2UvBA&s" }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus produtos',
      produtosParaView: meusProdutos// Passando o array para a view
    });
  });

  module.exports = router;
