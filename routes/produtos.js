var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // Dados dos produtos
    const produtos = [
        { id: 1, nome: 'Smartphone X1', descricao: 'Smartphone com tela OLED de 6.5", 128GB de armazenamento.', imagem: './imagens/smartphone-x1.jpg' },
        { id: 2, nome: 'Notebook Z3', descricao: 'Notebook ultrafino com processador i7, 16GB RAM, SSD 512GB.', imagem: './imagens/notebook-z3.jpg' },
        { id: 3, nome: 'Câmera ProShot', descricao: 'Câmera digital com lente intercambiável, 24MP.', imagem: './imagens/camera-proshot.jpg' },
        { id: 4, nome: 'Fone de Ouvido MaxSound', descricao: 'Fones com cancelamento de ruído e bateria de 40h.', imagem: './imagens/fone-maxsound.jpg' },
        { id: 5, nome: 'Relógio SmartTime', descricao: 'Relógio inteligente com monitor de batimentos.', imagem: './imagens/relogio-smarttime.jpg' },
        { id: 6, nome: 'Tablet SkyTab 10', descricao: 'Tablet Android com tela de 10", 64GB.', imagem: './imagens/tablet-skytab.jpg' },
        { id: 7, nome: 'Monitor UltraWide', descricao: 'Monitor 34" UltraWide Full HD para produtividade.', imagem: './imagens/monitor-ultrawide.jpg' },
        { id: 8, nome: 'Teclado Mecânico RGB', descricao: 'Teclado mecânico com retroiluminação RGB.', imagem: './imagens/teclado-rgb.jpg' },
        { id: 9, nome: 'Mouse Gamer VX', descricao: 'Mouse com 6 botões programáveis e 16.000 DPI.', imagem: './imagens/mouse-gamer.jpg' },
        { id: 10, nome: 'Caixa de Som Pulse', descricao: 'Caixa de som Bluetooth com graves potentes.', imagem: './imagens/caixa-pulse.jpg' },
    ];

    res.render('produtos', {
        titulo: 'Lista de Produtos',
        produtosParaView: produtos
    });
});

module.exports = router;
