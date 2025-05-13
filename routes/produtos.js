var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Camiseta Básica', descricao: 'Camiseta 100% algodão, confortável para o dia a dia.', preco: 49.99 },
      { id: 2, nome: 'Tênis Esportivo', descricao: 'Ideal para caminhadas e corridas leves.', preco: 129.99 },
      { id: 3, nome: 'Mochila Escolar', descricao: 'Espaçosa e resistente, com vários compartimentos.', preco: 89.99 },
      { id: 4, nome: 'Calça Jeans Slim', descricao: 'Modelo ajustado com tecido flexível.', preco: 119.99 },
      { id: 5, nome: 'Relógio Digital', descricao: 'Display LED com pulseira de silicone.', preco: 74.99 },
      { id: 6, nome: 'Fone Bluetooth', descricao: 'Fones sem fio com microfone embutido.', preco: 159.99 },
      { id: 7, nome: 'Jaqueta Corta-Vento', descricao: 'Ideal para dias frios e chuvosos.', preco: 199.99 },
      { id: 8, nome: 'Boné Estampado', descricao: 'Boné com ajuste traseiro e estampa urbana.', preco: 39.99 },
      { id: 9, nome: 'Óculos de Sol', descricao: 'Lentes com proteção UV400.', preco: 99.99 },
      { id: 10, nome: 'Carteira Masculina', descricao: 'Feita em couro sintético com divisórias internas.', preco: 59.99 },
      { id: 11, nome: 'Cinto de Couro', descricao: 'Ajustável, com fivela metálica resistente.', preco: 64.99 },
      { id: 12, nome: 'Tênis Casual', descricao: 'Confortável para uso diário.', preco: 139.99 },
      { id: 13, nome: 'Camisa Social', descricao: 'Ideal para ambientes formais ou trabalho.', preco: 89.99 },
      { id: 14, nome: 'Chinelo Slide', descricao: 'Palmilha macia, ideal para o verão.', preco: 44.99 },
      { id: 15, nome: 'Blusa de Moletom', descricao: 'Com capuz e bolso frontal.', preco: 149.99 },
      { id: 16, nome: 'Shorts Esportivo', descricao: 'Leve, com tecido que seca rápido.', preco: 54.99 },
      { id: 17, nome: 'Meias Cano Alto', descricao: 'Pacote com 3 pares.', preco: 29.99 },
      { id: 18, nome: 'Perfume Masculino', descricao: 'Fragrância amadeirada e duradoura.', preco: 189.99 },
      { id: 19, nome: 'Gorro de Lã', descricao: 'Quente e estiloso para o inverno.', preco: 34.99 },
      { id: 20, nome: 'Camisa Polo', descricao: 'Clássica e versátil, disponível em várias cores.', preco: 79.99 },
      { id: 21, nome: 'Pulseira Fitness', descricao: 'Monitora passos, batimentos e calorias.', preco: 119.99 }
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
