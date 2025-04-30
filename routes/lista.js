var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // Dados dinâmicos com definição de cada letra grega
    const meusItens = [
      { id: 1, nome: 'Item Alpha', descricao: 'Alpha (Α, α) é a primeira letra do alfabeto grego. Representa começo, liderança.' },
      { id: 2, nome: 'Item Beta', descricao: 'Beta (Β, β) é a segunda letra do alfabeto grego. Origem da palavra "beta" em informática.' },
      { id: 3, nome: 'Item Gamma', descricao: 'Gamma (Γ, γ) é a terceira letra grega. Representa ângulos e radiação gama em física.' },
      { id: 4, nome: 'Item Delta', descricao: 'Delta (Δ, δ) é usada para representar variação ou mudança em matemática e física.' },
      { id: 5, nome: 'Item Epsilon', descricao: 'Epsilon (Ε, ε) simboliza pequenas quantidades, frequentemente usada em limites matemáticos.' },
      { id: 6, nome: 'Item Zeta', descricao: 'Zeta (Ζ, ζ) é a sexta letra grega, usada na função zeta de Riemann na matemática.' },
      { id: 7, nome: 'Item Eta', descricao: 'Eta (Η, η) representa eficiência em física e engenharia.' },
      { id: 8, nome: 'Item Theta', descricao: 'Theta (Θ, θ) representa ângulos em trigonometria e a função de Heaviside.' },
      { id: 9, nome: 'Item Iota', descricao: 'Iota (Ι, ι) simboliza algo muito pequeno ou insignificante.' },
      { id: 10, nome: 'Item Kappa', descricao: 'Kappa (Κ, κ) é usada em física para coeficientes como condutividade térmica.' },
      { id: 11, nome: 'Item Lambda', descricao: 'Lambda (Λ, λ) é comum em física para comprimento de onda e em computação (funções lambda).' },
      { id: 12, nome: 'Item Mu', descricao: 'Mu (Μ, μ) é o símbolo para o micro (10^-6) e também massa em física.' },
      { id: 13, nome: 'Item Nu', descricao: 'Nu (Ν, ν) representa frequência em física e estatística.' },
      { id: 14, nome: 'Item Xi', descricao: 'Xi (Ξ, ξ) é usada em matemática e estatística, embora raramente.' },
      { id: 15, nome: 'Item Omikron', descricao: 'Omikron (Ο, ο) é o equivalente grego do "O" latino, sem uso técnico frequente.' },
      { id: 16, nome: 'Item Pi', descricao: 'Pi (Π, π) representa a constante matemática 3,14159…, usada em geometria.' },
      { id: 17, nome: 'Item Rho', descricao: 'Rho (Ρ, ρ) é usada para densidade em física e matemática.' },
      { id: 18, nome: 'Item Sigma', descricao: 'Sigma (Σ, σ) representa somatórios em matemática e desvio padrão em estatística.' },
      { id: 19, nome: 'Item Tau', descricao: 'Tau (Τ, τ) às vezes é usado como 2π em matemática e em constantes de tempo.' },
      { id: 20, nome: 'Item Upsilon', descricao: 'Upsilon (Υ, υ) é pouco usada, mas aparece em física de partículas.' },
      { id: 21, nome: 'Item Phi', descricao: 'Phi (Φ, φ) representa o número áureo (1,618...) e fluxo magnético.' },
      { id: 22, nome: 'Item Chi', descricao: 'Chi (Χ, χ) aparece em estatística (teste qui-quadrado) e em genética.' },
      { id: 23, nome: 'Item Psi', descricao: 'Psi (Ψ, ψ) representa funções de onda na mecânica quântica.' },
      { id: 24, nome: 'Item Omega', descricao: 'Omega (Ω, ω) representa resistência elétrica e frequência angular.' },
    ];
  
    // Renderizar a view 'lista.ejs' passando os dados
    res.render('lista', {
      titulo: 'Minha Lista Dinâmica',
      itensParaView: meusItens
    });
});

module.exports = router;
