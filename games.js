const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: { preload: preload, create: create, update: update }
};

const game = new Phaser.Game(config);

let bg, leftSprite, rightSprite, dialogueBox, nameTag, textObject, startText, titleText, menuSofia;
let currentLine = 0;
let music;
let gameStarted = false;

// ROTEIRO COMPLETO ORGANIZADO
const story = [
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Narrador', text: 'Era fim de tarde. O sol atravessava a janela da sala.' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Narrador', text: 'Ryhan estava sentado no sofá. Tainá cuidava de algumas flores.' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Narrador', text: 'Sofia, uma pequena gatinha curiosa, observava tudo do alto da estante.' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Narrador', text: 'Ela percebeu uma coisa: sempre que Ryhan olhava para Tainá... o olhar dele mudava.' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Narrador', text: 'Não importava o que ela estivesse fazendo... Ryhan sorria. Sofia não entendia.' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Ryhan', text: '— Você também quer saber, Sofia?' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Ryhan', text: '— É difícil explicar...' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Sofia', text: '"Difícil explicar?"' },
    { bg: 'sala', left: 'sofia', right: null, speaker: 'Narrador', text: 'Sofia ficou inconformada. Sendo assim, ela descobriria sozinha.' },
    
    // Cena 2: Coruja
    { bg: 'sala', left: 'sofia', right: 'coruja', speaker: 'Narrador', text: 'A primeira que encontra é Olívia. Uma velha coruja que acredita que toda resposta existe nos livros.' },
    { bg: 'sala', left: 'sofia', right: 'coruja', speaker: 'Coruja', text: '— Seu pai gosta dela porque ela é bonita.' },
    { bg: 'sala', left: 'sofia', right: 'coruja', speaker: 'Narrador', text: 'Sofia vê Tainá acordando com o cabelo bagunçado. Ryhan olha e sorri igual.' },
    { bg: 'sala', left: 'sofia', right: 'coruja', speaker: 'Sofia', text: '"Então não é só isso..."' },

    // Cena 3: Beija-flor
    { bg: 'jardim', left: 'sofia', right: 'beija_flor', speaker: 'Beijar flor', text: '— Ela deve ser como uma rosa: bonita, delicada e cheirosa.' },
    { bg: 'jardim', left: 'sofia', right: 'beija_flor', speaker: 'Narrador', text: 'Mas Ryhan olha do mesmo jeito mesmo quando Tainá volta suja de terra das plantas.' },
    { bg: 'jardim', left: 'sofia', right: 'beija_flor', speaker: 'Sofia', text: '"Talvez não seja só o perfume..."' },

    // Cena 4: Canario
    { bg: 'cozinha', left: 'sofia', right: 'canario', speaker: 'Canario', text: '— Claro que é porque ela canta!' },
    { bg: 'cozinha', left: 'sofia', right: 'canario', speaker: 'Narrador', text: 'Tainá canta enquanto cozinha. Mas num dia ela está cansada, não canta, e o sorriso continua.' },

    // Cena 5: Lontra
    { bg: 'quarto', left: 'sofia', right: 'lontra', speaker: 'Lontra', text: '— Ela vive desenhando paisagens. Quando alguém cria coisas bonitas, é impossível não amar.' },
    { bg: 'quarto', left: 'sofia', right: 'lontra', speaker: 'Narrador', text: 'Ryhan sorri para ela antes mesmo de olhar o papel do desenho.' },

    // Cena 6: Grilo
    { bg: 'sala_escura', left: 'sofia', right: 'grilo', speaker: 'Grilo', text: '— É isso! A música encanta. Ela toca violão!' },
    { bg: 'sala_escura', left: 'sofia', right: 'grilo', speaker: 'Narrador', text: 'Dias depois o violão está guardado, ela nem toca, e o sorriso continua igual.' },

    // Cena 7: Raposa
    { bg: 'sala', left: 'sofia', right: 'raposa', speaker: 'Raposa', text: '— Ele ama porque ela faz coisas para ele.' },
    { bg: 'sala', left: 'sofia', right: 'raposa', speaker: 'Narrador', text: 'Mas Sofia vê Ryhan presenteando e fazendo gentilezas. Parecia natural, não uma troca.' },

    // Cena 8: Ouriço
    { bg: 'jardim', left: 'sofia', right: 'ourico', speaker: 'Ouriço', text: '— Talvez ele goste do sorriso dela.' },
    { bg: 'jardim', left: 'sofia', right: 'ourico', speaker: 'Narrador', text: 'Tainá está preocupada um dia, nem sorri. Mesmo assim, ele olha pra ela daquele jeito.' },

    // Cena 9: Borboleta
    { bg: 'jardim', left: 'sofia', right: 'borboleta', speaker: 'Borboleta', text: '— Algumas pessoas carregam primavera por onde passam.' },
    { bg: 'jardim', left: 'sofia', right: 'borboleta', speaker: 'Narrador', text: 'Tainá dança, ri sozinha, se anima com pequenas coisas. Ela tem um jeito único.' },

    // Cena 10: Gato Velho
    { bg: 'telhado', left: 'sofia', right: 'gato_velho', speaker: 'Sofia', text: '— Já descobri dezenas de motivos, mas nenhum explica tudo.' },
    { bg: 'telhado', left: 'sofia', right: 'gato_velho', speaker: 'Gato Velho', text: '— Porque você procura uma resposta como quem procura uma única estrela. Mas o céu nunca é bonito por causa de uma estrela só.' },

    // Cena 11: Final
    { bg: 'sala_escura', left: 'sofia', right: null, speaker: 'Narrador', text: 'Sofia entende. Nunca foi uma única coisa. Eram as rosas, o violão, o jeito que ela ria...' },
    { bg: 'sala_escura', left: 'sofia', right: null, speaker: 'Sofia', text: 'Não existe uma resposta. Existem milhares. E todas elas cabem dentro de uma única pessoa.' },
    { bg: 'sala_escura', left: 'sofia', right: null, speaker: 'Narrador', text: 'O amor cresce nos detalhes que, juntos, tornam alguém impossível de substituir.' }
];

function preload() {
    // Menu Inicial
    this.load.image('parte_fora', 'parte_fora.jpg');
    this.load.image('sofia_2', 'sofia_2.png');

    // Cenários (.jpg)
    this.load.image('sala', 'sala.jpg');
    this.load.image('jardim', 'jardim.jpg');
    this.load.image('cozinha', 'cozinha.jpg');
    this.load.image('quarto', 'quarto.jpg');
    this.load.image('sala_escura', 'sala_es
