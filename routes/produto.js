var express = require('express');
var router = express.Router();

// Rota para listar produtos relacionados a carros
router.get('/', (req, res) => {
  // Dados dinâmicos com produtos relacionados a carros
  const meusProdutos = [
    { 
      id: 1, 
      nome: 'Óleo de motor', 
      descricao: 'Essencial para lubrificar as peças do motor, reduzindo o atrito e o desgaste.',
      imagem: '/imagens/oleo.png' // Caminho da imagem
    },
    { 
      id: 2, 
      nome: 'Pneus', 
      descricao: 'Componentes de borracha que fazem o contato do carro com a estrada, garantindo tração e segurança.',
      imagem: '/imagens/pneus.webp' // Caminho da imagem
    },
    { 
      id: 3, 
      nome: 'Bateria de carro', 
      descricao: 'Fornece energia elétrica para o funcionamento de sistemas do veículo e para dar partida no motor.',
      imagem: '/imagens/bateria.webp' // Caminho da imagem
    },
    { 
      id: 4, 
      nome: 'Filtro de ar', 
      descricao: 'Filtra impurezas do ar antes que ele entre no motor, melhorando a eficiência da combustão.',
      imagem: '/imagens/filtro.jpg' // Caminho da imagem
    },
    { 
      id: 5, 
      nome: 'Pastilhas de freio', 
      descricao: 'Responsáveis pela frenagem do veículo, garantindo a segurança ao dirigir.',
      imagem: '/imagens/pastilha.webp' // Caminho da imagem
    },
    { 
      id: 6, 
      nome: 'Faróis de LED', 
      descricao: 'Iluminação mais eficiente e duradoura para a condução noturna.',
      imagem: '/imagens/farois.jpg' // Caminho da imagem
    },
    { 
      id: 7, 
      nome: 'Capa de proteção para carro', 
      descricao: 'Protege a pintura do carro contra sujeiras e intempéries, como chuva e sol intenso.',
      imagem: '/imagens/capa.webp' // Caminho da imagem
    },
    { 
      id: 8, 
      nome: 'Alarme de carro', 
      descricao: 'Sistema de segurança que ajuda a evitar furtos e aumenta a proteção do veículo.',
      imagem: '/imagens/alarme.png' // Caminho da imagem
    },
    { 
      id: 9, 
      nome: 'Limpadores de para-brisa', 
      descricao: 'Essenciais para garantir visibilidade em condições de chuva e garantir segurança ao dirigir.',
      imagem: '/imagens/limpador.jpg' // Caminho da imagem
    },
    { 
      id: 10, 
      nome: 'Macaco sanfona de Carro', 
      descricao: 'Conjunto de iten necessário para emergências durante viagens de carro.',
      imagem: '/imagens/macaco.jpg' // Caminho da imagem
    },
    { 
      id: 11, 
      nome: 'Ar-condicionado automotivo', 
      descricao: 'Sistema responsável por regular a temperatura interna do veículo, proporcionando conforto.',
      imagem: '/imagens/ar.jpeg' // Caminho da imagem
    },
    { 
      id: 12, 
      nome: 'Amortecedores', 
      descricao: 'Absorvem os impactos e ajudam a manter o controle e a estabilidade do veículo em diversas condições de estrada.',
      imagem: '/imagens/amortecedor.jpeg' // Caminho da imagem
    },
    { 
      id: 13, 
      nome: 'Correia dentada', 
      descricao: 'Parte essencial para o funcionamento do motor, conectando e sincronizando as peças do motor.',
      imagem: '/imagens/correia.jpg' // Caminho da imagem
    },
    { 
      id: 14, 
      nome: 'Tapetes de carro', 
      descricao: 'Protegem o interior do veículo, evitando sujeira e desgaste do carpete original.',
      imagem: '/imagens/tapete.png' // Caminho da imagem
    },
    { 
      id: 15, 
      nome: 'Sensor de estacionamento', 
      descricao: 'Sistema que ajuda a evitar colisões durante manobras, detectando objetos próximos ao veículo.',
      imagem: '/imagens/sensor.webp' // Caminho da imagem
    }
  ];

  // Renderizando a página com os dados
  res.render('produto', {
    titulo: 'Minha Lista Dinâmica de Produtos Automotivos',
    produtosParaView: meusProdutos // Passando o array para a view
  });
});

module.exports = router;
