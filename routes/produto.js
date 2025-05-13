var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
       
    // Smartphones e Acessórios
    { id: 1, nome: 'Smartphone Android Básico', descricao: 'Tela HD, 4GB RAM, 64GB armazenamento.', preco: 499.99 },
    { id: 2, nome: 'Smartphone Android Intermediário', descricao: 'Tela Full HD, 6GB RAM, 128GB armazenamento.', preco: 1299.99 },
    { id: 3, nome: 'Smartphone Android Premium', descricao: 'Tela AMOLED, 8GB RAM, 256GB armazenamento.', preco: 2799.99 },
    { id: 4, nome: 'Fone de Ouvido Bluetooth Básico', descricao: 'Sem fio, bateria de 10h.', preco: 129.99 },
    { id: 5, nome: 'Fone de Ouvido Bluetooth Intermediário', descricao: 'Cancelamento de ruído ativo, bateria de 20h.', preco: 349.99 },
    { id: 6, nome: 'Fone de Ouvido Bluetooth Premium', descricao: 'Som Hi-Fi, bateria de 30h.', preco: 799.99 },

    // Computadores e Periféricos
    { id: 7, nome: 'Notebook Básico', descricao: 'Intel i3, 4GB RAM, 128GB SSD.', preco: 1899.99 },
    { id: 8, nome: 'Notebook Intermediário', descricao: 'Intel i5, 8GB RAM, 256GB SSD.', preco: 3499.99 },
    { id: 9, nome: 'Notebook Premium', descricao: 'Intel i7, 16GB RAM, 512GB SSD.', preco: 6999.99 },
    { id: 10, nome: 'Teclado Mecânico Gamer', descricao: 'Switches mecânicos, retroiluminação RGB.', preco: 399.99 },
    { id: 11, nome: 'Mouse Gamer com Alta Precisão', descricao: 'Sensor 16.000 DPI, botões programáveis.', preco: 249.99 },
    { id: 12, nome: 'Monitor Full HD 24"', descricao: 'Painel IPS, 75Hz.', preco: 799.99 },

    // Áudio e Vídeo
    { id: 13, nome: 'Caixa de Som Bluetooth Portátil', descricao: 'Resistente à água, bateria de 12h.', preco: 179.00 },
    { id: 14, nome: 'Caixa de Som Bluetooth Intermediária', descricao: 'Som estéreo, bateria de 20h.', preco: 499.99 },
    { id: 15, nome: 'Caixa de Som Bluetooth Premium', descricao: 'Som 3D, bateria de 30h.', preco: 1199.99 }
  ];

   
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Mes Produtos',
      ProdutosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
