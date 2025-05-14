var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
        [  
            {  
                id: 1,  
                nome: 'Teclado Musical',  
                descricao: 'Harmonia em tons digitais',  
                imagem: 'https://cdn.awsli.com.br/2500x2500/2495/2495408/produto/220289870305ca1195d.jpg'  
            },  
            {  
                id: 2,  
                nome: 'Jardim Subaquático',  
                descricao: 'Ecossistemas em movimento constante',  
                imagem: 'https://thumbs.dreamstime.com/b/jardim-subaqu%C3%A1tico-97521025.jpg'  
            },  
            {  
                id: 3,  
                nome: 'Foguetes de Papel',  
                descricao: 'Viagens imaginárias infantis',  
                imagem: 'https://previews.123rf.com/images/dariako/dariako2001/dariako200100329/137227854-foguete-de-papel-estrelas-de-artesanato-origami-crian%C3%A7a-jogar-inova%C3%A7%C3%A3o-tecnol%C3%B3gica.jpg'  
            },  
            {  
                id: 4,  
                nome: 'Pintura Abstrata',  
                descricao: 'Cores sem forma definida',  
                imagem: 'https://lobopopart.com.br/wp-content/uploads/2020/06/Arte-Abstrata.jpg'  
            },  
            {  
                id: 5,  
                nome: 'Café Espacial',  
                descricao: 'Grãos cultivados em órbita',  
                imagem: 'https://cafeespacial.com/wp-content/uploads/2019/02/cafe13_web.jpg'  
            },  
            {  
                id: 6,  
                nome: 'Dança das Sombras',  
                descricao: 'Coreografia noturna silenciosa',  
                imagem: 'https://thumbs.dreamstime.com/z/sombras-da-dan%C3%A7a-7119687.jpg'  
            },  
            {  
                id: 7,  
                nome: 'Livro Flutuante',  
                descricao: 'Páginas que desafiam gravidade',  
                imagem: 'https://m.media-amazon.com/images/I/51w3hbJzmWL._AC_UF894,1000_QL80_.jpg'  
            },  
            {  
                id: 8,  
                nome: 'Relógio de Areia Invertido',  
                descricao: 'Tempo fluindo para cima',  
                imagem: 'https://m.media-amazon.com/images/I/61ZE+RWMX4L._AC_UF894,1000_QL80_.jpg'  
            },  
            {  
                id: 9,  
                nome: 'Esculturas de Vento',  
                descricao: 'Arte moldada pelo ar',  
                imagem: 'https://cdn-cpoco.nitrocdn.com/tULlXHbPhGEWZxjaPaXQirQiEfCfDEJV/assets/images/optimized/rev-8dbb47f/www.cnstatue.com/wp-content/uploads/2020/01/metal-kinetic-wind-sculpture.jpg'  
            },  
            {  
                id: 10,  
                nome: 'Chuva de Diamantes',  
                descricao: 'Preciosidade em gotas cristalinas',  
                imagem: 'https://gemanativa.com/wp-content/uploads/2024/02/chuva-de-diamantes-1.jpg'  
            }  
        ];  

    // Renderizar a view 'lista.ejs' passando os dados
    res.render('produtos', {
        titulo: 'Minha Lista de Produtos',
        itensParaView: meusItens // Passando o array para a view
    });
});

module.exports = router;
