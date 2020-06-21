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