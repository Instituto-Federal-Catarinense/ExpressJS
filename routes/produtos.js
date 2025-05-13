var express = require("express");
var router = express.Router();

// Rota principal para renderizar nossa lista de produtos
router.get("/", (req, res) => {
  // Lista de produtos com descrições e imagens
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      descricao: "Um dispositivo móvel moderno com câmera de alta resolução.",
      imagem:
        "https://img.lakeshorelearning.com/is/image/OCProduction/vr125?wid=500&hei=375&fmt=pjpeg&pscan=auto&qlt=90,1&op_sharpen=0&resMode=bilin&op_usm=2,0.25,7,0",
    },
    {
      id: 2,
      nome: "Notebook",
      descricao: "Computador portátil ideal para trabalho e entretenimento.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprSVxWqLzf3cs5nIMmFWbXco6q5JW-LACtg&s",
    },
    {
      id: 3,
      nome: "Fones de Ouvido",
      descricao: "Fones sem fio com cancelamento de ruído.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpdXps-dWWpkhYzJpNKOCRy3kiUpLoReC6g&s",
    },
    {
      id: 4,
      nome: "Câmera Digital",
      descricao: "Capture momentos com alta qualidade de imagem.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuB8vuIXDCkj9wGq_t__qC7BGHkREzMbNHrA&s",
    },
    {
      id: 5,
      nome: "Smartwatch",
      descricao: "Relógio inteligente com monitoramento de saúde.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2xVb-h3a-HiAvOkBDHI5842pv72v9W36YQ&s",
    },
    {
      id: 6,
      nome: "Tablet",
      descricao: "Dispositivo versátil para leitura, vídeos e navegação.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaWc8JUSmc9JougPmgDWPpnU3Vmj6Kw5gkA&s",
    },
    {
      id: 7,
      nome: "Console de Videogame",
      descricao: "Para diversão com os melhores jogos do mercado.",
      imagem: "https://i.ebayimg.com/images/g/GfIAAOSw7Q9m9X39/s-l400.jpg",
    },
    {
      id: 8,
      nome: "Teclado Mecânico",
      descricao:
        "Teclado com resposta tátil ideal para gamers e programadores.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQne9cE-u8MVSfW_qKG-X6PsQ7_NOPvWPcbNg&s",
    },
    {
      id: 9,
      nome: "Cadeira Gamer",
      descricao: "Conforto e ergonomia para longas sessões no computador.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBcLUBeW7A3P1q1dH4KrBy4xqYTKnZHfbOA&s",
    },
    {
      id: 10,
      nome: "Monitor 4K",
      descricao: "Alta resolução para uma experiência visual imersiva.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ev7iirCfBtaThSWywr_7Kvec5sAsS_mDMA&s",
    },
  ];

  // Renderizar a view 'lista.ejs' passando os produtos
  res.render("produtos", {
    titulo: "Lista de Produtos",
    itensParaView: produtos,
  });
});

module.exports = router;
