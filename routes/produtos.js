var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Banana', preco: 'preço: 1 pila', validade: 'validade: ano que vem' },
      { id: 2, nome: 'Jamelão', preco: 'preço: 5 pila', validade: 'validade: mês que vem' },
      { id: 3, nome: 'Farofa', preco: 'preço: 10 pila' , validade: 'validade: semana que vem' },
      { id: 4, nome: 'Banana', preco: 'preço: 15 pila', validade: 'validade: amanhã' },
      { id: 5, nome: 'Farofa de Banana', preco: 'preço: 35000 pila', validade: 'validade: hoje' },
      { id: 6, nome: 'Sorvete', preco: 'preço: todos os dinheiors do mundo', validade: 'validade: ontem' },
      { id: 7, nome: 'Milkshake', preco: 'preço: todos os dinheiros do mundo²', validade: 'validade: semana passada' },
      { id: 8, nome: 'Medo abundante de todas as verdades', preco: 'preço: todos os dinheiros do mundo³', validade: 'validade: NUNCA' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Meus Produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
