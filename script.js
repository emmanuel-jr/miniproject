//challenge 1

function ageInDays()
{
    var birthYear = prompt('What year were you born?');
    var Age = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + Age + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function Reset() 
{
    document.getElementById('ageInDays').remove();
}

function Cat()
{
    var image = document.createElement('img');
    var div = document.getElementById('cat-gen');
    image.src = "https://cataas.com/cat/gif";
    div.appendChild(image); 
}



//challenge 3
function rps(choice)
{
    var human = choice.id;
    var bot = numToChoice(random());
    result = decideWinner(human, bot);
    message = finalMessage(result);   
    rpsFrEnd(human, bot, message);
}

function random()
{
    return Math.floor(Math.random() * 3);
}

function numToChoice(num)
{
    return ['rock', 'paper', 'scissors'][num];
}

function decideWinner(h, b)
{
    var database = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1}
    };

    return database[h][b];
}

function finalMessage(r)
{
    if (r === 0)
    return {'message': 'You lost', 'color': 'red'};

    else if (r === 0.5)
    return {'message': 'You tied', 'color': 'yellow'};

    else
    return {'message': 'You won', 'color': 'green'};
}

function rpsFrEnd(hu, bo, m)
{
    var images = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var hDiv = document.createElement('div');
    var bDiv = document.createElement('div');
    var mDiv = document.createElement('div');

    hDiv.innerHTML = "<img src='" + images[hu] + "' height = '150' weight = '150' style='box-shadow: 0px 10px 50px blue;'>";
    bDiv.innerHTML = "<img src='" + images[bo] + "' height = '150' weight = '150' style='box-shadow: 0px 10px 50px red;'>";
    mDiv.innerHTML = "<h1 style='color: " + m['color'] + "; font-size: 60px padding: 30px'>" + m['message'] + "</h1>";

    document.getElementById('flex-box-rps-div').appendChild(hDiv);
    document.getElementById('flex-box-rps-div').appendChild(mDiv);
    document.getElementById('flex-box-rps-div').appendChild(bDiv);

}



//challenge 4
var all_buttons = document.getElementsByTagName('button');
const  buttonCpy = [];

function colorChange(myButton)
{
    for(let i = 0; i < all_buttons.length; i++)
        buttonCpy.push(all_buttons[i].classList[1]);
    

    if (myButton.value === 'red')
        buttonRed();
    

    else if (myButton.value === 'green')
        buttonGreen();
    

    else if (myButton.value === 'reset')
        buttonReset();
    
    else if (myButton.value === 'random')
        buttonRandom();

}

function buttonRandom()
{
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    
    for (let i = 0; i < all_buttons.length; i++){
        let number = Math.floor(Math.random() * 4);

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[number]);
        }
}

function buttonRed()
{
    for (let i = 0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen()
{
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
        }
}

function buttonReset()
{
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(buttonCpy[i]);
        }
}



//challenge 5
let blackJackGame = {
    'you': {'result': '#your-bj-result', 'div': '#your-box', 'score': 0},
    'dealer': {'result': '#dealer-bj-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardValue': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
}

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const CARD = blackJackGame['cards'];
const sound = new Audio('sounds/swish.m4a');
const won = new Audio('sounds/cash.mp3');
const lost = new Audio('sounds/aww.mp3');


Hit = () => {
    document.getElementById('deal-button').disabled = true;
    document.getElementById('stand-button').disabled = false;
    let n = Math.floor(Math.random() * 13);

    cardShow(YOU, CARD[n]);
    updateScore(YOU, CARD[n]);
    showScore(YOU);

    if (document.querySelector(YOU['result']).textContent === 'BUST!') {
        document.getElementById('hit-button').disabled = true;
    }
}


Stand = () => {
    let n = Math.floor(Math.random() * 13);
    cardShow(DEALER, CARD[n]);
    updateScore(DEALER, CARD[n]);
    showScore(DEALER);

    if (DEALER['score'] <= 15) {
        setTimeout(Stand, 1500);
    }
    
    if (DEALER['score'] > 15) {
    showResult(whoWon());
    }
}


cardShow = (activeOne, c) => {
    let card = document.createElement('img');
    card.src = `images/${c}.png`;
    card.height = "150";
    card.width = "100";
    card.style.padding = "8";
    document.querySelector(activeOne['div']).appendChild(card);
    sound.play();
}


deal = () => {
    let yourImage = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for (let i = 0; yourImage.length > i; i++) {
        yourImage[i].remove();
    }

    for (let i = 0; dealerImage.length > i; i++) {
        dealerImage[i].remove();
    }

    document.getElementById('stand-button').disabled = true;
    document.getElementById('hit-button').disabled = false;

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector(YOU['result']).textContent = 0;
    document.querySelector(DEALER['result']).textContent = 0;
    document.querySelector(YOU['result']).style.color = 'white';
    document.querySelector(DEALER['result']).style.color = 'white';

    document.querySelector('#bj-result').textContent = "Let's Play";
    document.querySelector('#bj-result').style.color = 'black';
}

updateScore = (activeOne, card) => {
    let currentCard = blackJackGame['cardValue'][card];

    if (card === 'A') {
        if (activeOne['score'] + blackJackGame['cardValue'][card][1] > 21) {
            currentCard = blackJackGame['cardValue'][card][0];
        }
        else {
            currentCard = blackJackGame['cardValue'][card][1];
        }
    }

    activeOne['score'] += currentCard;
}


showScore = (activeOne) => {
    if (activeOne['score'] <= 21) {
    document.querySelector(activeOne['result']).textContent = activeOne['score'];
    }
    else {
        document.querySelector(activeOne['result']).textContent = 'BUST!';
        document.querySelector(activeOne['result']).style.color = 'red';
    }
}

whoWon = () => {
    let winner;

    if (document.querySelector(YOU['result']).textContent === document.querySelector(DEALER['result']).textContent) {
        winner = undefined;
        blackJackGame.draws++;
    }

    else if (YOU['score'] <= 21 && DEALER['score'] <= 21) {
        if (YOU['score'] > DEALER['score']) {
            winner = YOU;
            blackJackGame.wins++;
        }
        else {
            winner = DEALER;
            blackJackGame.losses++;
        }
    }

    else {
        if (DEALER['score'] > 21) {
            winner = YOU;
            blackJackGame.wins++;
        }
        else {
            winner = DEALER;
            blackJackGame.losses++;
        }
    }

    return winner;
}

showResult = (theResult) => {
    let message, messageColor;

    if (theResult === YOU) {
        message = 'You won!';
        messageColor = 'green';
        document.querySelector('#wins').textContent = blackJackGame.wins;
        won.play();
    }

    if (theResult === DEALER) {
        message = 'You lost!';
        messageColor = 'red';
        document.querySelector('#losses').textContent = blackJackGame.losses;
        lost.play();
    }

    if (theResult === undefined) {
        message = 'You drew!';
        messageColor = 'black';
        document.querySelector('#draws').textContent = blackJackGame.draws;
    }

    document.querySelector('#bj-result').textContent = message;
    document.querySelector('#bj-result').style.color = messageColor;
    document.getElementById('deal-button').disabled = false;
}


ction = (button, bool) => {
    button.disabled = bool;
    document.getElementById('hit-button').disabled = bool;
}

window.onload = () => {
    document.getElementById('stand-button').disabled = true;
}

document.querySelector('#hit-button').addEventListener('click', Hit);
document.querySelector('#stand-button').addEventListener('click', Stand);
document.querySelector('#deal-button').addEventListener('click', deal);



