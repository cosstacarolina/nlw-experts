const perguntas = [
  {
    pergunta: "Qual é o nome do campeão com uma flecha gigante em League of Legends?",
    respostas: [
      "Ashe",
      "Vayne",
      "Miss Fortune",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o objetivo principal do jogo League of Legends?",
    respostas: [
      "Capturar torres",
      "Matar monstros neutros",
      "Destruir o nexus inimigo",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do torneio mundial de League of Legends?",
    respostas: [
      "League of Legends Championships Series (LCS)",
      "Mid-Season Invitational (MSI)",
      "League of Legends World Championship (Worlds)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do mapa principal de League of Legends?",
    respostas: [
      "Summit's Rift",
      "Twisted Treeline",
      "Summoner's Rift",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o número máximo de jogadores em uma equipe no modo padrão de League of Legends?",
    respostas: [
      "3",
      "5",
      "7",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o termo usado para descrever a posição na rota inferior em League of Legends?",
    respostas: [
      "Top",
      "Mid",
      "Bot",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do estúdio que desenvolveu League of Legends?",
    respostas: [
      "Valve Corporation",
      "Blizzard Entertainment",
      "Riot Games",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do suporte em League of Legends?",
    respostas: [
      "Fornecer cura e apoio à equipe",
      "Atacar e causar dano ao inimigo",
      "Dominar objetivos neutros",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do dragão que concede bônus elementais à equipe que o derrota em League of Legends?",
    respostas: [
      "Barão Nashor",
      "Dragão Ancião",
      "Dragão Elemental",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do barão Nashor em League of Legends?",
    respostas: [
      "Conceder ouro e experiência à equipe que o derrota",
      "Fortalecer minions da equipe que o derrota",
      "Conceder bônus de ataque e habilidades à equipe que o derrota",
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