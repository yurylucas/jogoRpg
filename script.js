let xp = 0;         //let xp = 0;
let vida = 100;     //let health = 100;
let mone = 50;      //let gold = 50;
let armaAtual = 0;  //let currentWeapon = 0;
let vamosLutar;     //let fighting;
let vidaDoMonstro;  //monsterHealth;
let inventario = ["Pudin"]; //let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const vidaText = document.querySelector('#vidaText');
const moneText = document.querySelector('#moneText');
const estatisticasDeMonstros = document.querySelector('#estatisticasDeMonstros');
const NomeDoMonstro = document.querySelector('#NomeDoMonstro');
const textoDeVidaDoMonstro = document.querySelector('#textoDeVidaDoMonstro');
const armas = [
    {name: 'Pudin', poder: 5 },
    {name: 'Espada', poder: 30},
    {name: 'Pistola', poder: 50},
    {name: 'AK47', poder: 100}
];
const localizacaos = [
    {
        nome: "vaParaAcidade",
        "button text": ['Vá para a loja', 'Vá para a carverna', 'Lute com o Dragam'],
        'button functions': [vaLoja, vaCarverna, lutarDragão],
        text: 'Você está na praça da cidade. Você vê uma placa que diz \"Loja\".'
    },
    {
        name: 'vaLoja',
        'button text': ['Compre 10 de vida com (R$ 10.00)', 'Compre arma (R$ 20.00)', 'Voltar para a praça da cidade'],
        'button functions': [comprarVida, comprarArma, vaParaAcidade],
        text: 'Você entrou na loja.'
    },
    {
        name: 'vaCarverna',
        'button text': ['Lutar contra o lobo', 'Lute contra a fera com presas', 'Vá para a praça da cidade'],
        'button functions': [lutarContraOlobo, lutarContraAfera, vaParaAcidade],
        text: 'Você entra na caverna. Você vê alguns monstros.'
    }
];

// botões de inicialização
button1.onclick = vaLoja;
button2.onclick = vaCarverna;
button3.onclick = lutarDragão;

function update(localizacao){
    button1.innerText = localizacao["button text"][0];
    button2.innerText = localizacao["button text"][1];
    button3.innerText = localizacao["button text"][2];
    button1.onclick = localizacao["button functions"][0];
    button2.onclick = localizacao["button functions"][1];
    button3.onclick = localizacao["button functions"][2];
    text.innerText = localizacao.text;//'"Você está na praça da cidade. Você vê uma placa que diz \"Loja\"."'
}

function vaParaAcidade(){
    update(localizacaos[0]);
};

function vaLoja(){
    update(localizacaos[1]);
};

function vaCarverna(){
    update(localizacaos[2]);
}

function lutarDragão(){
    console.log('Dragão lutador');
}

function comprarVida(){
if (mone >= 10){ 
    mone -= 10;
    vida += 10;
    moneText.innerText = mone;
    vidaText.innerText = vida;
  } else {
    text.innerText = 'Você não tem ouro suficiente para comprar vida.'
  }
}

function comprarArma() {
    if (armaAtual < armas.length - 1) {
     if (mone >= 20) {
        mone -= 20;
        armaAtual++;
        moneText.innerText = mone;
        let novaArma = armas[armaAtual].name;
        text.innerText = 'Você agora tem um ' + novaArma + ".";
        inventario.push(novaArma);
        text.innerText += " Em seu inventário você tem: " + inventario;
     } else {
        text.innerText = 'Você não tem ouro suficiente para comprar uma arma.';
    }
     } else {
        text.innerText = 'Você já tem a arma mais poderosa!';
        button2.innerText = "Venda arma por 15 ouro";
        button2.onclick = 'vender Arma';
  }
}

function venderArma(){
    if (inventario.length > 1){
        mone += 15;
        moneText.innerText = mone;
        let armaAtual = inventario.shift();
        text.innerText = 'You sold a '+armaAtual+'.';
        text.innerText += ' Em seu inventário você tem: '+ inventario;
    }
}

function lutarContraOlobo(){

}

function lutarContraAfera(){

}

