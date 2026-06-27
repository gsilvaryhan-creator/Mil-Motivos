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
let gameStarted = false;

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
    // Carrega apenas imagens essenciais usando links alternativos em caso de falha de arquivo local
    this.load.image('parte_fora', 'parte_fora.jpg');
    this.load.image('sofia_2', 'sofia_2.png');
    this.load.image('sala', 'sala.jpg');
    this.load.image('jardim', 'jardim.jpg');
    this.load.image('cozinha', 'cozinha.jpg');
    this.load.image('quarto', 'quarto.jpg');
    this.load.image('sala_escura', 'sala_escura.jpg');
    this.load.image('telhado', 'telhado.jpg');
    this.load.image('sofia', 'sofia.png');
    this.load.image('coruja', 'coruja.png');
    this.load.image('beija_flor', 'beija_flor.png');
    this.load.image('canario', 'canario.png');
    this.load.image('lontra', 'lontra.png');
    this.load.image('grilo', 'grilo.png');
    this.load.image('raposa', 'raposa.png');
    this.load.image('ourico', 'ourico.png');
    this.load.image('borboleta', 'borboleta.png');
    this.load.image('gato_velho', 'gato_velho.png');
}

function create() {
    // Desenha os elementos na tela sem depender de carregamentos externos de fontes
    bg = this.add.image(640, 360, 'parte_fora').setDisplaySize(1280, 720);
    menuSofia = this.add.image(480, 520, 'sofia_2').setOrigin(0.5, 1);

    leftSprite = this.add.image(300, 450, 'sofia').setOrigin(0.5, 1).setVisible(false);
    rightSprite = this.add.image(980, 450, 'coruja').setOrigin(0.5, 1).setVisible(false);

    dialogueBox = this.add.graphics();
    dialogueBox.fillStyle(0x000000, 0.85);
    dialogueBox.fillRoundedRect(50, 480, 1180, 200, 30);
    dialogueBox.lineStyle(4, 0xffffff, 0.5);
    dialogueBox.strokeRoundedRect(50, 480, 1180, 200, 30);
    dialogueBox.setVisible(false);

    // Fontes seguras que rodam em qualquer celular
    nameTag = this.add.text(80, 495, '', { font: 'bold 32px Arial', fill: '#ffcc00' }).setVisible(false);
    textObject = this.add.text(80, 550, '', { font: '28px Arial', fill: '#ffffff', wordWrap: { width: 1120 }, lineSpacing: 8 }).setVisible(false);

    titleText = this.add.text(640, 150, 'Mil Motivos', { font: 'bold 90px Georgia, serif', fill: '#ffffff' }).setOrigin(0.5);
    titleText.setShadow(3, 3, 'rgba(0,0,0,0.7)', 5);

    startText = this.add.text(640, 620, 'Aperte em qualquer lugar para começar', { font: 'bold 24px Arial', fill: '#ffffff' }).setOrigin(0.5);
    
    this.tweens.add({
        targets: startText,
        alpha: 0,
        duration: 800,
        yoyo: true,
        repeat: -1
    });

    this.input.on('pointerdown', () => {
        if (!gameStarted) {
            gameStarted = true;
            startText.destroy();
            titleText.destroy();
            menuSofia.destroy();
            dialogueBox.setVisible(true);
            nameTag.setVisible(true);
            textObject.setVisible(true);
            advanceStory();
        } else {
            advanceStory();
        }
    });
}

function advanceStory() {
    if (currentLine >= story.length) {
        game.scene.scenes[0].cameras.main.fadeOut(2000, 0, 0, 0);
        return;
    }

    const data = story[currentLine];
    bg.setTexture(data.bg);

    leftSprite.setVisible(!!data.left).setTexture(data.left || 'sofia');
    if (data.right) {
        rightSprite.setVisible(true).setTexture(data.right);
    } else {
        rightSprite.setVisible(false);
    }

    if (data.speaker === 'Sofia') {
        highlight(leftSprite, rightSprite);
    } else if (data.speaker === 'Narrador') {
        leftSprite.clearTint().setScale(1);
        rightSprite.clearTint().setScale(1);
    } else {
        highlight(rightSprite, leftSprite);
    }

    nameTag.setText(data.speaker.toUpperCase());
    textObject.setText(data.text);

    currentLine++;
}

function update() {}

function highlight(speaker, listener) {
    speaker.clearTint().setScale(1.1);
    if (listener.visible) {
        listener.setTint(0x666666).setScale(0.9);
    }
}
