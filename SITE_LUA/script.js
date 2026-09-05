const inicio = new Date(2025, 8, 6, 0, 0, 0);

function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;

        const ultimoDiaMesAnterior = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        ).getDate();

        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const dataBase = new Date(
        inicio.getFullYear() + anos,
        inicio.getMonth() + meses,
        inicio.getDate()
    );

    const diferenca = agora - dataBase;

    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );
    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);


// 365 vezes nos //

// ==========================
// 365 VEZES NÓS
// ==========================

const arquivos = {

    1: {
        nome: "Promessas de Dedinho",
        tipo: "Memória",
        texto: "Desde o início, as promessas de dedinho tornaram quase como contratos para nós."
    },

    2: {
        nome: "Forever - The Beach Boys",
        tipo: "Música",
        texto: "A música que define o nosso relacionamento, eu e você para sempre, juntas."
    },

    3: {
        nome: "Parque da Família",
        tipo: "Lugar",
        texto: "Um lugar único, uma lembrança incrível, onde tudo começou."
    },

    4: {
        nome: "Carbonara",
        tipo: "Comida",
        texto: "Nossa comida conforto, a que aprendemos a fazer juntas e desde então sempre que queremos fazer algo legal fazemos carbonara."
    },

   5: {
        nome: "Nosso Mundo no Minecraft",
        tipo: "Jogo",
        texto: "Nosso mundo no Minecraft é um pedacinho da nossa história que começou junto com a gente. Desde quando começamos a conversar, fomos construindo esse mundo juntas, bloco por bloco, e acho que por isso ele acabou ficando tão a nossa cara. É sempre muito divertido entrar lá, construir alguma coisa, explorar e simplesmente passar um tempinho juntas. No fim, acho que não importa muito o que a gente esteja fazendo, porque até um mundo de bloquinhos consegue virar um lugar especial quando é nosso."
    },

    6: {
        nome: "You're My Sunshine",
        tipo: "Música",
        texto: "Primeira música que eu cantei para você, tava morrendo de vergonha, mas foi com certeza um dos momentos mais especiais para mim. "
    },

    7: {
        nome: "Casos/Histórias",
        tipo: "Memória",
        texto: "Os casos, histórias e universos que a gente inventou juntas são uma parte muito especial de nós. Acho que o nosso primeiro caso foi o empurrãozinho para tantas outras histórias que vieram depois, e desde então sempre foi divertido criar personagens, situações e universos inteiros só porque a nossa imaginação decidiu ir longe. No fim, acho que o mais especial nem são as histórias que criamos, mas o fato de que sempre encontramos um jeito de criar alguma coisa juntas."
    },

    8: {
        nome: "BK",
        tipo: "Comida",
        texto: "Nossa comida de delivery conforto, em dias tristes ou ruins, se estivermos juntas iremos jantar BK enquanto assistimos a coisa mais besta de todas, e isso é muito bom."
    },

    9: {
        nome: "Coexistir",
        tipo: "Momentos",
        texto: "Sempre que estamos juntas, não estamos necessariamente fazendo a mesma coisa, as vezes cada uma está em seu mundinho, mas só de ter sua presença perto de mim, tudo fica melhor."
    },

    10: {
        nome: "Se você fosse... o que você seria?",
        tipo: "Momento",
        texto: "Uma pergunta frequente no nosso relacionamento, sempre perguntamos o que a outra seria em um universo aleatório, e normalmente esses perguntas se tornam em conversas extremamente engraçadas."
    },

    11: {
        nome: "Presentes feitos a mão",
        tipo: "Momento",
        texto: "Desde o começo da nossa relação nós fazemos diversos presentes a mão, desde pequenas cartinhas até presentes mais elaborados, mas sempre com muito carinho, amo fazer coisinhas para você e amo que isso seja recíproco. "
    },

    12: {
        nome: "Lakeburg Legacies",
        tipo: "Jogo",
        texto: "Ainda temos muito o que fazer nesse jogo, e sempre que jogamos é muito divertido, amo o fato de voce ter me apresentado esse jogo."
    },

    13: {
        nome: "Nunca fomos um segredo",
        tipo: "Nós",
        texto: "Uma das coisas que eu mais gosto na nossa história é que a gente nunca foi um segredo. Nunca precisou existir só entre quatro paredes ou ser escondido de quem estava ao nosso redor. Desde o começo, fomos simplesmente nós duas, vivendo o que sentíamos e deixando que isso fizesse parte da nossa vida."
    },

    14: {
        nome: "Cafeterias",
        tipo: "Lugar",
        texto: "Amamos cafeterias, e ainda temos muitas para conhecer, sempre é bom sair para conhecer uma nova cafetria com você."
    },

    15: {
        nome: "Integradora",
        tipo: "Memórias",
        texto: "As intermináveis risadas e brincadeiras, quando nós inventavamos desculpas apenas para sair de sala e ficar vagando, conversando e as vezes realmente fazendo o trabalho."
    },

    16: {
        nome: "Idas ao cinema",
        tipo: "Nós",
        texto: "O tipo de saída que mais gostamos, vamos ao shopping e assistimos algum filme, sempre acompanhadas de muita pipoca e chocolate."
    },

    17: {
        nome: "Tangerina",
        tipo: "Você",
        texto: "O cheiro, a fruta a flor, tudo me lembra a você, acho que é por conta do frescor, sabe?"
    },

    18: {
        nome: "The Craving - Twenty-One Pilots",
        tipo: "Música",
        texto: "Uma música que eu dediquei a você, acredito que fala muito sobre a gente, principalmente sobre o medo que temos de machucar uma a outra, mesmo sendo sem intenção."
    },

    19: {
        nome: "Calls",
        tipo: "Nós",
        texto: "O conforto de saber que apesar de não estarmos juntas lado a lado, eu sempre vou poder te ligar em ficar em call com você, e ainda vou ter sua companhia."
    },

    20: {
        nome: "Lírios",
        tipo: "Presente",
        texto: "Os lírios tomaram um significado mais profundo, sao lindos obviamente, mas depois de ter ganhado eles de você pela primeira vez, foi como se eu soubesse que  nao existiria flor mais bonita que lírios."
    },

    21: {
        nome: "Cozinhar",
        tipo: "Momento",
        texto: "Cozinhar juntas é basicamente uma obrigação quando estamos juntas, é sempre tão divertido e conseguimos resultados bem melhores a cada vez que cozinhamos."
    },

    22: {
        nome: "Chocolate da nestlé",
        tipo: "Comida",
        texto: "Esse chocolate tornou o chcocolate que nos conforta que sempre comemos quando estamos juntas, seja em um dia bom ou em um dia ruim."
    },

    23: {
        nome: "Formidable - Twenty-One Pilots",
        tipo: "Música",
        texto: "Essa música descreve totalente o começo do nosso relacionamento, mostra o tanto que tinhamos para descobrir, o quanto eu confiava em você, apesar dos meu medos iniciais."
    },

    24: {
        nome: "Conversas ante de Dormir",
        tipo: "Nós",
        texto: "Além do nosso ritual de boa noite, as vezes engatamos em pequenas conversas antes de dormir, eu amo quando isso acontece, porque é sem querer, só acontece, e nessas conversas normalmente falamos declarações, mesmo sem planejar."
    },

    25: {
        nome: "Lua",
        tipo: "Você",
        texto: "Olhar para a lua (do céu) sempre vai me lembrar você, por conta do apelido, obviamente, mas porque olhar para a lua é simplesmente confortável, não sei explicar direito, mas é bom, e essa sensação boa me lembra você."
    },

    26: {
        nome: "Deixa eu derreter (suas estrelas) - Peu Heise",
        tipo: "Música",
        texto: "Essa música descreve muito o nosso sentimento, de ambos os lados, o quanto queremos uma a outra, eu acho isso muito lindo na gente, que é quase uma devoção, sabe?"
    },

};



const botaoSurpresa = document.querySelector('#botao-surpresa');

const numeroArquivo = document.querySelector('.resultado .numero-arquivo');
const nomeArquivo = document.querySelector('.resultado h4');
const textoArquivo = document.querySelector('.resultado p');

botaoSurpresa.addEventListener('click', function() {

    const numero = Math.floor(Math.random() * 26) + 1;
    const arquivo = arquivos[numero];

    numeroArquivo.textContent = `ARQUIVO ${String(numero).padStart(3, '0')}`;
    nomeArquivo.textContent = arquivo.nome;

    textoArquivo.innerHTML = `
        <strong>${arquivo.tipo}</strong>
        <br>
        ${arquivo.texto}
    `;
});