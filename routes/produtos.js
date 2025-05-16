var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Camiseta Básica', descricao: 'Camiseta 100% algodão, confortável para o dia a dia.', preco: 49.99, imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 2, nome: 'Tênis Esportivo', descricao: 'Ideal para caminhadas e corridas leves.', preco: 129.99, imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 3, nome: 'Mochila Escolar', descricao: 'Espaçosa e resistente, com vários compartimentos.', preco: 89.99, imagem: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 4, nome: 'Calça Jeans Slim', descricao: 'Modelo ajustado com tecido flexível.', preco: 119.99, imagem: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 5, nome: 'Relógio Digital', descricao: 'Display LED com pulseira de silicone.', preco: 74.99, imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 6, nome: 'Fone Bluetooth', descricao: 'Fones sem fio com microfone embutido.', preco: 159.99, imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 7, nome: 'Jaqueta Corta-Vento', descricao: 'Ideal para dias frios e chuvosos.', preco: 199.99, imagem: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 8, nome: 'Boné Estampado', descricao: 'Boné com ajuste traseiro e estampa urbana.', preco: 39.99, imagem: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 9, nome: 'Óculos de Sol', descricao: 'Lentes com proteção UV400.', preco: 99.99, imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 10, nome: 'Carteira Masculina', descricao: 'Feita em couro sintético com divisórias internas.', preco: 59.99, imagem: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 11, nome: 'Cinto de Couro', descricao: 'Ajustável, com fivela metálica resistente.', preco: 64.99, imagem: 'https://newsunset.com.br/cdn/shop/products/0-main-cintos-de-couro-genuino-para-mulheres-segunda-camada-cinto-mulher-cowskin-vintage-pin-fivela-cinta-jeans.jpg?v=1675002443' },
      { id: 12, nome: 'Tênis Casual', descricao: 'Confortável para uso diário.', preco: 139.99, imagem: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 13, nome: 'Camisa Social', descricao: 'Ideal para ambientes formais ou trabalho.', preco: 89.99, imagem: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 14, nome: 'Chinelo Slide', descricao: 'Palmilha macia, ideal para o verão.', preco: 44.99, imagem: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 15, nome: 'Blusa de Moletom', descricao: 'Com capuz e bolso frontal.', preco: 149.99, imagem: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 16, nome: 'Shorts Esportivo', descricao: 'Leve, com tecido que seca rápido.', preco: 54.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBFue1mYtEk0jrnZevy8IXmUFdkZHiTyB0w&s' },
      { id: 17, nome: 'Meias Cano Alto', descricao: 'Pacote com 3 pares.', preco: 29.99, imagem: 'https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 18, nome: 'Perfume Masculino', descricao: 'Fragrância amadeirada e duradoura.', preco: 189.99, imagem: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 19, nome: 'Gorro de Lã', descricao: 'Quente e estiloso para o inverno.', preco: 34.99, imagem: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 20, nome: 'Camisa Polo', descricao: 'Clássica e versátil, disponível em várias cores.', preco: 79.99, imagem: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 21, nome: 'Pulseira Fitness', descricao: 'Monitora passos, batimentos e calorias.', preco: 119.99, imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
    ];

    // 4. Renderizar a view 'lista.ejs' passando os dados
    res.render('produtos', {
      titulo: 'Meus Produtos', // Corrigido de "Mes" para "Meus"
      ProdutosParaView: meusProdutos.map(produto => ({
        ...produto,
        preco: produto.preco.toFixed(2) // Formata o preço com 2 casas decimais
      }))
    });
});

module.exports = router;