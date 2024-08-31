const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o seu gênero?",
        alternativas: [
            {
                texto: "Masculino",
                afirmacao: "3+"
            },
            {
                texto: "Feminino",
                afirmacao: "3+"
            },
            {
                texto: "Prefiro não dizer.",
                afirmacao: "1+"
            }
        ]
    },
    {
        enunciado: "Qual é a sua faixa etária?",
        alternativas: [
            {
                texto: "Menos que 18.",
                afirmacao: "10+"
            },
            {
                texto: "Mais que 18.",
                afirmacao: "15+"
            }
        ]
    },
    {
        enunciado: "Com que frequência você compra roupas?",
        alternativas: [
            {
                texto: "Mensalmente.",
                afirmacao: "15+"
            },
            {
                texto: "Anualmente.",
                afirmacao: "9+"
            }
        ]
    },
    {
        enunciado: "Qual é o seu tipo de roupa favorito?",
        alternativas: [
            {
                texto: "Inverno.",
                 afirmacao: "25+"
            },
            {
                texto: "Verão.",
              afirmacao: "25+"
            }
        ]
    },
    {
        enunciado: "Quais são os fatores mais importantes para você ao escolher uma loja de roupas?",
        alternativas: [
            {
                texto: "Qualidade de produto.",
                afirmacao: "40"
            },
            {
                texto: "Custo-beneficio",
                afirmacao: "50"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns! Obrigado por ter respondido nossa persquisa. Some os pontos a baixo e nos mande uma mensagem no instagram dizendo quantos pontos você fez para ganhar um cupom exclusivo";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
