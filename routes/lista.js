const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const meusItens = [...Array(24).keys()].map((i) => {
    const letras = ['Alfa','Beta','Gama','Delta','Épsilon','Zeta','Eta','Teta','Iota','Kapa','Lambda','Mi','Ni','Xi','Ômicron','Pi','Rô','Sigma','Tau','Upsilon','Fi','Chi','Psi','Ômega'];
    return {
      id: i + 1,
      nome: `Item ${letras[i]}`,
      descricao: `Descrição detalhada do Item ${letras[i]}.`
    };
  });

  res.render('lista', {
    titulo: 'Minha Lista Dinâmica',
    itensParaView: meusItens
  });
});

module.exports = router;
