const story = [
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'Era fim de tarde. O sol atravessava a janela da sala.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'Ryhan estava sentado no sofá. Tainá cuidava de algumas flores.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'Sofia, uma pequena gatinha curiosa, observava tudo do alto da estante.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'Ela percebeu uma coisa: sempre que Ryhan olhava para Tainá... o olhar dele mudava.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'Não importava o que ela estivesse fazendo... Ryhan sorria. Sofia não entendia.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Ryhan', text: '— Você também quer saber, Sofia?' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Ryhan', text: '— É difícil explicar...' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Sofia', text: '"Difícil explicar?"' },
    { bg: 'sala.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'Sofia ficou inconformada. Sendo assim, ela descobriria sozinha.' },
    
    { bg: 'sala.jpg', left: 'sofia.png', right: 'coruja.png', speaker: 'Narrador', text: 'A primeira que encontra é Olívia. Uma velha coruja que acredita que toda resposta existe nos livros.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: 'coruja.png', speaker: 'Coruja', text: '— Seu pai gosta dela porque ela é bonita.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: 'coruja.png', speaker: 'Narrador', text: 'Sofia vê Tainá acordando com o cabelo bagunçado. Ryhan olha e sorri igual.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: 'coruja.png', speaker: 'Sofia', text: '"Então não é só isso..."' },

    { bg: 'jardim.jpg', left: 'sofia.png', right: 'beija_flor.png', speaker: 'Beijar flor', text: '— Ela deve ser como uma rosa: bonita, delicada e cheirosa.' },
    { bg: 'jardim.jpg', left: 'sofia.png', right: 'beija_flor.png', speaker: 'Narrador', text: 'Mas Ryhan olha do mesmo jeito mesmo quando Tainá volta suja de terra das plantas.' },
    { bg: 'jardim.jpg', left: 'sofia.png', right: 'beija_flor.png', speaker: 'Sofia', text: '"Talvez não seja só o perfume..."' },

    { bg: 'cozinha.jpg', left: 'sofia.png', right: 'canario.png', speaker: 'Canario', text: '— Claro que é porque ela canta!' },
    { bg: 'cozinha.jpg', left: 'sofia.png', right: 'canario.png', speaker: 'Narrador', text: 'Tainá canta enquanto cozinha. Mas num dia ela está cansada, não canta, e o sorriso continua.' },

    { bg: 'quarto.jpg', left: 'sofia.png', right: 'lontra.png', speaker: 'Lontra', text: '— Ela vive desenhando paisagens. Quando alguém cria coisas bonitas, é impossível não amar.' },
    { bg: 'quarto.jpg', left: 'sofia.png', right: 'lontra.png', speaker: 'Narrador', text: 'Ryhan sorri para ela antes mesmo de olhar o papel do desenho.' },

    { bg: 'sala_escura.jpg', left: 'sofia.png', right: 'grilo.png', speaker: 'Grilo', text: '— É isso! A música encanta. Ela toca violão!' },
    { bg: 'sala_escura.jpg', left: 'sofia.png', right: 'grilo.png', speaker: 'Narrador', text: 'Dias depois o violão está guardado, ela nem toca, e o sorriso continua igual.' },

    { bg: 'sala.jpg', left: 'sofia.png', right: 'raposa.png', speaker: 'Raposa', text: '— Ele ama porque ela faz coisas para ele.' },
    { bg: 'sala.jpg', left: 'sofia.png', right: 'raposa.png', speaker: 'Narrador', text: 'Mas Sofia vê Ryhan presenteando e fazendo gentilezas. Parecia natural, não uma troca.' },

    { bg: 'jardim.jpg', left: 'sofia.png', right: 'ourico.png', speaker: 'Ouriço', text: '— Talvez ele goste do sorriso dela.' },
    { bg: 'jardim.jpg', left: 'sofia.png', right: 'ourico.png', speaker: 'Narrador', text: 'Tainá está preocupada um dia, nem sorri. Mesmo assim, ele olha pra ela daquele jeito.' },

    { bg: 'jardim.jpg', left: 'sofia.png', right: 'borboleta.png', speaker: 'Borboleta', text: '— Algumas pessoas carregam primavera por onde passam.' },
    { bg: 'jardim.jpg', left: 'sofia.png', right: 'borboleta.png', speaker: 'Narrador', text: 'Tainá dança, ri sozinha, se anima com pequenas coisas. Ela tem um jeito único.' },

    { bg: 'telhado.jpg', left: 'sofia.png', right: 'gato_velho.png', speaker: 'Sofia', text: '— Já descobri dezenas de motivos, mas nenhum explica tudo.' },
    { bg: 'telhado.jpg', left: 'sofia.png', right: 'gato_velho.png', speaker: 'Gato Velho', text: '— Porque você procura uma resposta como quem procura uma única estrela. Mas o céu nunca é bonito por causa de uma estrela só.' },

    { bg: 'sala_escura.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'Sofia entende. Nunca foi uma única coisa. Eram as rosas, o violão, o jeito que ela ria...' },
    { bg: 'sala_escura.jpg', left: 'sofia.png', right: '', speaker: 'Sofia', text: 'Não existe uma resposta. Existem milhares. E todas elas cabem dentro de uma única pessoa.' },
    { bg: 'sala_escura.jpg', left: 'sofia.png', right: '', speaker: 'Narrador', text: 'O amor cresce nos detalhes que, juntos, tornam alguém impossível de substituir.' }
];

let currentLine = 0;

const bgLayer = document.getElementById('bg-layer');
const menuScreen = document.getElementById('menu-screen');
const menuSofia = document.getElementById('menu-sofia');
const leftSprite = document.getElementById('left-sprite');
const rightSprite = document.getElementById('right-sprite');
const dialogueContainer = document.getElementById('dialogue-container');
const nameTag = document.getElementById('name-tag');
const dialogueText = document.getElementById('dialogue-text');
const bgMusic = document.getElementById('bg-music');
const wrapper = document.getElementById('game-wrapper');

// Carrega o fundo inicial com verificação segura
changeBackground('parte_fora.jpg');

function changeBackground(url) {
    let img = new Image();
    img.src = url;
    img.onload = function() {
        bgLayer.style.backgroundImage = `url('${url}')`;
    };
    img.onerror = function() {
        // Sem erro, mantém o gradiente nativo visível se a imagem sumir
        bgLayer.style.backgroundImage = 'none';
    };
}

// Mecânica de Zoom Automático para caber em qualquer celular sem cortar nada
function resizeGame() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const scaleX = windowWidth / 1280;
    const scaleY = windowHeight / 720;
    const scale = Math.min(scaleX, scaleY);
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.transformOrigin = 'center center';
}
window.addEventListener('resize', resizeGame);
window.addEventListener('orientationchange', () => setTimeout(resizeGame, 200));
resizeGame();

function startGame() {
    menuScreen.style.display = 'none';
    menuSofia.style.display = 'none';
    dialogueContainer.style.display = 'flex';
    
    try {
        bgMusic.volume = 0.4;
        bgMusic.play();
    } catch(e) {}
    
    advanceStory();
}

function advanceStory() {
    if (currentLine >= story.length) {
        wrapper.style.transition = 'opacity 2s';
        wrapper.style.opacity = '0';
        return;
    }

    const data = story[currentLine];
    changeBackground(data.bg);

    if (data.left) {
        leftSprite.src = data.left;
        leftSprite.style.display = 'block';
    } else {
        leftSprite.style.display = 'none';
    }

    if (data.right) {
        rightSprite.src = data.right;
        rightSprite.style.display = 'block';
    } else {
        rightSprite.style.display = 'none';
    }

    if (data.speaker === 'Sofia') {
        leftSprite.className = 'sprite active-speaker';
        rightSprite.className = 'sprite inactive-speaker';
    } else if (data.speaker === 'Narrador') {
        leftSprite.className = 'sprite';
        rightSprite.className = 'sprite';
    } else {
        leftSprite.className = 'sprite inactive-speaker';
        rightSprite.className = 'sprite active-speaker';
    }

    nameTag.innerText = data.speaker;
    dialogueText.innerText = data.text;

    currentLine++;
}
