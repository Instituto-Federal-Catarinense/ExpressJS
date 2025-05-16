var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
  const meusItens = [
    {
      id: 1,
      nome: 'Banana',
      preco: 'R$ 05,67/Kg',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
    },
    {
      id: 2,
      nome: 'Maçã',
      preco: 'R$ 03,35/Kg',
      imagem: 'https://viverbem.unimed.coop.br/wp-content/uploads/2023/02/86-beneficios-da-maca.jpg'
    },
    {
      id: 3,
      nome: 'Laranja',
      preco: 'R$ 08,46/Kg',
      imagem: 'https://image.tuasaude.com/media/article/uk/dg/beneficios-da-laranja_53623.jpg?width=686&height=487'
    },
    {
      id: 4,
      nome: 'Limão',
      preco: 'R$ 03,23/Kg',
      imagem: 'https://www.estadao.com.br/resizer/v2/U7O624P7SNFHDEC5D6ZFTCRQOE.jpeg?quality=80&auth=e2f044ec81ea61334e707cf3cdbe656c254007c9e3187979a40a54da2789ee27&width=1075&height=527&smart=true'
    },
    {
      id: 5,
      nome: 'Melão',
      preco: 'R$ 08,99/Kg',
      imagem: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3321973:1673298382/Mel%C3%A3o%202.jpg?f=16x9&$p$f=be2bfbf'
    },
    {
      id: 6,
      nome: 'Melancia',
      preco: 'R$ 15,67/Kg',
      imagem: 'https://agroinsight.com.br/wp-content/uploads/2021/04/nutricao-e-fertirrigacao-da-melancia-blog.jpg'
    },
    {
      id: 7,
      nome: 'Mamão',
      preco: 'R$ 12,12/Kg',
      imagem: 'https://idigestivo.com.br/wp-content/uploads/2017/10/the-top-5-healthy-reasons-to-pick-papaya-750x500.jpg'
    },
    {
      id: 8,
      nome: 'Kiwi',
      preco: 'R$ 06,50/Kg',
      imagem: 'https://image.tuasaude.com/media/article/jc/dt/emagrecer-com-kiwi_19106.jpg'
    },
    {
      id: 9,
      nome: 'Uva',
      preco: 'R$ 14,27/Kg',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl7niBbkcxSL3bgYyXIunB8fepVV8iFwuKw&s'
    }
  ];

  // Renderizando a view 'lista.ejs' com os dados
  res.render('lista', {
    titulo: 'Fruteira',
    itensParaView: meusItens
  });
});

module.exports = router;
