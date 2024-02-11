const Perguntas = [
  {
    Pergunta: "Qual é a linguagem de programação para desenvolvimento web?",
    Respostas: [
      "HTML",
      "Java",
      "JavaScript",
    ],
    Correta: 2
  },
  {
    Pergunta: "Como se declara uma variável em JavaScript?",
    Respostas: [
      "var myVar = 5;",
      "variable myVar = 5;",
      "let myVar = 5;",
    ],
    Correta: 2
  },
  {
    Pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
    Respostas: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
    ],
    Correta: 1
  },
  {
    Pergunta: "O que é um array em JavaScript?",
    Respostas: [
      "Um tipo de dado para armazenar texto",
      "Uma função para realizar cálculos matemáticos",
      "Uma estrutura de dados para armazenar múltiplos valores",
    ],
    Correta: 2
  },
  {
    Pergunta: "Como criar uma função em JavaScript?",
    Respostas: [
      "function myFunction() {}",
      "def myFunction() {}",
      "create function myFunction() {}",
    ],
    Correta: 0
  },
  {
    Pergunta: "Qual método é usado para adicionar um elemento ao final de um array?",
    Respostas: [
      "appendElement()",
      "push()",
      "addToEnd()",
    ],
    Correta: 1
  },
  {
    Pergunta: "O que é o DOM em JavaScript?",
    Respostas: [
      "Uma linguagem de programação",
      "Um modelo para representar documentos HTML e XML",
      "Um tipo de variável em JavaScript",
    ],
    Correta: 1
  },
  {
    Pergunta: "Qual é a finalidade do operador '===' em JavaScript?",
    Respostas: [
      "Comparação estrita (valor e tipo)",
      "Atribuição de valor",
      "Comparação flexível (apenas valor)",
    ],
    Correta: 0
  },
  {
    Pergunta: "Como fazer uma requisição HTTP assíncrona em JavaScript?",
    Respostas: [
      "fetch()",
      "get()",
      "request()",
    ],
    Correta: 0
  },
  {
    Pergunta: "O que é o JSON em JavaScript?",
    Respostas: [
      "Uma linguagem de programação",
      "Um formato de dados para intercâmbio de informações",
      "Um método para estilizar elementos HTML",
    ],
    Correta: 1
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('#quiz-template');

const Corretas = new Set();
const TotalDePerguntas = Perguntas.length;
const MostrarTotal = document.querySelector('#acertos');
MostrarTotal.textContent = Corretas.size + ' de ' + TotalDePerguntas;

function verificarPontuacao() {
  if (Corretas.size === 10) {
    alert("Parabéns! Você acertou 10 perguntas!");
  }
}

for (const Item of Perguntas) {
  const QuizItem = template.content.querySelector('.quiz-item').cloneNode(true);
  QuizItem.querySelector('h3').textContent = Item.Pergunta;

  for (let resposta of Item.Respostas) {
    const dt = document.createElement('dt');
    const input = document.createElement('input');
    input.type = 'radio';
    input.setAttribute('name', 'pergunta-' + Perguntas.indexOf(Item));
    input.value = Item.Respostas.indexOf(resposta);
    input.addEventListener('change', (event) => {
      const estaCorreta = event.target.value == Item.Correta;

      Corretas.delete(Item);
      if (estaCorreta) {
        Corretas.add(Item);
      }

      MostrarTotal.textContent = Corretas.size + ' de ' + TotalDePerguntas;
      verificarPontuacao();
      
    });

    const span = document.createElement('span');
    span.textContent = resposta;

    dt.appendChild(input);
    dt.appendChild(span);

    QuizItem.querySelector('dl').appendChild(dt);

  }

  quiz.appendChild(QuizItem);

  
}
 



