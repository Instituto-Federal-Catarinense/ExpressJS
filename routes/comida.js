var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista de comidas
router.get('/', (req, res) => {
    // Lista de comidas com descrições
    const minhasComidas = [
        { id: 1, nome: 'Pizza', descricao: 'Uma deliciosa massa com queijo e toppings variados.' },
        { id: 2, nome: 'Sushi', descricao: 'Arroz com peixe cru ou outros ingredientes, tradicional japonês.' },
        { id: 3, nome: 'Feijoada', descricao: 'Prato brasileiro feito com feijão preto e carnes variadas.' },
        { id: 4, nome: 'Tacos', descricao: 'Tortilhas mexicanas recheadas com carne, queijo e vegetais.' },
        { id: 5, nome: 'Sorvete', descricao: 'Sobremesa gelada feita com leite, creme e sabores diversos.' },
        { id: 6, nome: 'Lasanha', descricao: 'Massa em camadas com molho, queijo e carne ou vegetais.' },
        { id: 7, nome: 'Curry', descricao: 'Prato aromático com especiarias, comum na culinária indiana.' },
        { id: 8, nome: 'Paella', descricao: 'Prato espanhol feito com arroz, frutos do mar e temperos.' },
        { id: 9, nome: 'Hambúrguer', descricao: 'Sanduíche com carne bovina, queijo, alface e tomate.' },
        { id: 10, nome: 'Pasta', descricao: 'Massas italianas com diversos molhos e acompanhamentos.' }
    ];

    // Renderizar a view 'lista.ejs' passando as comidas
    res.render('lista', {
        titulo: 'Minha Lista de Comidas Favoritas',
        itensParaView: minhasComidas
    });
});

module.exports = router;