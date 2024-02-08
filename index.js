const perguntas = [
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar um elemento do HTML por sua classe",
        "Selecionar um elemento do HTML por seu ID",
        "Selecionar um elemento do HTML por sua tag",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Uma função que não retorna valor",
        "Uma função que tem acesso ao escopo externo no qual foi definida",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "concat()",
        "pop()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em um array em JavaScript?",
      respostas: [
        "Remove elementos do array",
        "Altera todos os elementos do array",
        "Cria um novo array com os resultados de uma função aplicada a cada elemento do array",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "32",
        "5",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de dados",
        "A representação do documento HTML que JavaScript pode usar para modificar o conteúdo e a estrutura da página",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Remover um ouvinte de evento",
        "Adicionar um ouvinte de evento a um elemento HTML",
        "Criar um novo elemento HTML",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor constante",
        "Um container para armazenar dados",
        "Uma função",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'reduce()' faz em um array em JavaScript?",
      respostas: [
        "Adiciona um novo elemento ao array",
        "Remove elementos do array",
        "Executa uma função para cada elemento do array, resultando em um único valor de retorno",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz') //# = id
  const template = document.querySelector('template') //querySelector seleciona determinado elemento de dentro da constante
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')//seleciona dentro o span dentro de acertos
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas // imprime 'x de 10'
  
  //for (int i = 0; i<j.length; i++) em for...of, o 'const item' seria 'int i' e 'of' as outras condições
  for(const item of perguntas){
     const quizItem = template.content.cloneNode(true) //true quer que clone todos os filhos, todos os nós dentro de 'template'
     quizItem.querySelector('h3').textContent = item.pergunta
  
     for(let resposta of item.respostas){
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta //mudando o conteudo do dt span
       dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))//seta nome e valor
       dt.querySelector('input').value = item.respostas.indexOf(resposta) //atribui o valor do indice ao input 'value'
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item) //se mudar de opiniao vai alterar o valor de corretas
        if(estaCorreta){
          corretas.add(item)
        }
        
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
       quizItem.querySelector('dl').appendChild(dt)
     }
  
     quizItem.querySelector('dl dt').remove() //remove 'dl dt' Resposta A
  
     //coloca a pergunta na tela
     quiz.appendChild(quizItem) //appendChild adiciona um filho
  }