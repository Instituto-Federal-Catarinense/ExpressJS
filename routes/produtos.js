var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Arroz', tipo: 'Cereal', preco: 'R$ 05,00' },
      { id: 2, nome: 'Feijão', tipo: 'Cereal', preco: 'R$ 05,00' },
      { id: 3, nome: 'Macarrão', tipo: 'Massa', preco: 'R$ 04,00' },
      { id: 4, nome: 'Leite', tipo: 'Laticínio', preco: 'R$ 07,00' },
      { id: 5, nome: 'Farinha de Trigo', tipo: 'Grão', preco: 'R$ 02,00' },
      { id: 6, nome: 'Azeite', tipo: 'Óleo', preco: 'R$ 06,00' },
      { id: 7, nome: 'Café', tipo: 'Grão', preco: 'R$ 10,00' },
      { id: 8, nome: 'Açúcar', tipo: 'Condimento', preco: 'R$ 06,00' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Minha Lista de Produtos Dinâmica',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;