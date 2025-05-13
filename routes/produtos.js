var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
        { 
            id: 1, 
            nome: 'Caminhão', 
            descricao: 'Caminhões legais e bonitões',
            imagem: 'https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2022/05/10120845/Actros-2653-13-1160x775.jpg' // URL direta da imagem
        },
        { 
            id: 2, 
            nome: 'Signo', 
            descricao: 'Oróscopos e essas coisas',
            imagem: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/02/07/1094822831-mitos-e-verdades-sobre-os-signos-shutterstock.jpg' // URL direta da imagem
        },
        { 
            id: 3, 
            nome: 'Palácio', 
            descricao: 'Viver em um palácio deve ser show',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Palacio_Fronteira_-_Lisbon_%287721187114%29.jpg' // URL direta da imagem
        },
        { 
            id: 4, 
            nome: 'Camarão', 
            descricao: 'À milanesa ou alho e óleo',
            imagem: 'https://static.itdg.com.br/images/auto-auto/695e7cae035ad377dcfbb63fb7a4db19/receitas-com-camarao.jpg' // URL direta da imagem
        },
        { 
            id: 5, 
            nome: 'Letra ipsilon', 
            descricao: 'Letra mais sem sentido do alfabeto',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99gAMWUPQN9yorvyq7UjRfgkUnB3QtO4JMQ&s' // URL direta da imagem
        },
        { 
            id: 6, 
            nome: 'Porteiro', 
            descricao: 'Uma das profissões mais históricas',
            imagem: 'https://www.rrsecurity.com.br/img/services/porteiro.jpg' // URL direta da imagem
        },
        { 
            id: 7, 
            nome: 'Etanol', 
            descricao: 'Um dos piores combustiveis',
            imagem: 'https://static.manualdaquimica.com/conteudo/images/no-brasil-materia-prima-para-producao-etanol-cana-acucar-547f8416cddb8.jpg' // URL direta da imagem
        },
        { 
            id: 8, 
            nome: 'Utah', 
            descricao: 'Uma das cidades dos Estados Unidos',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Utah_in_United_States.svg/330px-Utah_in_United_States.svg.png' // URL direta da imagem
        },
        { 
            id: 9, 
            nome: 'J', 
            descricao: 'Letra J.',
            imagem: 'https://i.pinimg.com/originals/9b/4c/bb/9b4cbb56547f4bea0718a06f65fb525d.jpg' // URL direta da imagem
        },
        { 
            id: 10, 
            nome: 'Importação de mamíferos', 
            descricao: 'Tá tendo bastante até',
            imagem: 'https://www.shutterstock.com/image-vector/handpainted-watercolor-illustrations-diverse-wild-260nw-2598872001.jpg' // URL direta da imagem
        }
    ];

    // Renderizar a view 'lista.ejs' passando os dados
    res.render('produtos', {
        titulo: 'Minha Lista de Produtos',
        itensParaView: meusItens // Passando o array para a view
    });
});

module.exports = router;
