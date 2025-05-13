var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'Inter de Milão', foto: 'https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-home1-5641df6984c033177817422428119573-1024-1024.jpg' },
      { id: 2, nome: 'Paris Saint German', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpAk2DRLhFzRJRuQl67cxUJCRCmfrT7xCPQ&s' },
      { id: 3, nome: 'Arsenal', foto: 'https://tokstilo.com/wp-content/uploads/2024/09/2024-09-13-09.23.56.jpg' },
      { id: 4, nome: 'Barcelona', foto: 'https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-01-b90c1e0d94693c8fc117449291867995-1024-1024.jpeg' },
      { id: 5, nome: 'Leicester', foto: 'https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-leicester-home1-f6932be5ceb3501ed617234944794189-1024-1024.jpeg' },
  
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Minha Lista Produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });


module.exports = router;
