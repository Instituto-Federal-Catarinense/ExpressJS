var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
    { "id": 1, "nome": "Alfa", "descricao": "Primeira letra do alfabeto grego." },
    { "id": 2, "nome": "Beta", "descricao": "Segunda letra do alfabeto grego." },
    { "id": 3, "nome": "Gama", "descricao": "Terceira letra do alfabeto grego." },
    { "id": 4, "nome": "Delta", "descricao": "Quarta letra do alfabeto grego." },
    { "id": 5, "nome": "Épsilon", "descricao": "Quinta letra do alfabeto grego." },
    { "id": 6, "nome": "Zeta", "descricao": "Sexta letra do alfabeto grego." },
    { "id": 7, "nome": "Eta", "descricao": "Sétima letra do alfabeto grego." },
    { "id": 8, "nome": "Teta", "descricao": "Oitava letra do alfabeto grego." },
    { "id": 9, "nome": "Iota", "descricao": "Nona letra do alfabeto grego." },
    { "id": 10, "nome": "Kappa", "descricao": "Décima letra do alfabeto grego." },
    { "id": 11, "nome": "Lambda", "descricao": "Décima primeira letra do alfabeto grego." },
    { "id": 12, "nome": "Mi", "descricao": "Décima segunda letra do alfabeto grego." },
    { "id": 13, "nome": "Ni", "descricao": "Décima terceira letra do alfabeto grego." },
    { "id": 14, "nome": "Xi", "descricao": "Décima quarta letra do alfabeto grego." },
    { "id": 15, "nome": "Omicron", "descricao": "Décima quinta letra do alfabeto grego." },
    { "id": 16, "nome": "Pi", "descricao": "Décima sexta letra do alfabeto grego." },
    { "id": 17, "nome": "Rho", "descricao": "Décima sétima letra do alfabeto grego." },
    { "id": 18, "nome": "Sigma", "descricao": "Décima oitava letra do alfabeto grego." },
    { "id": 19, "nome": "Tau", "descricao": "Décima nona letra do alfabeto grego." },
    { "id": 20, "nome": "Ípsilon", "descricao": "Vigésima letra do alfabeto grego." },
    { "id": 21, "nome": "Fí", "descricao": "Vigésima primeira letra do alfabeto grego." },
    { "id": 22, "nome": "Khi", "descricao": "Vigésima segunda letra do alfabeto grego." },
    { "id": 23, "nome": "Psi", "descricao": "Vigésima terceira letra do alfabeto grego." },
    { "id": 24, "nome": "Ômega", "descricao": "Última letra do alfabeto grego." }
    ]
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Minha Lista Dinâmica',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
