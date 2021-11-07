// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "SHOP" - Player can buy health or attack
// "LOSE" - Player robot's health is zero or less

// Each round is against an enemy robot, 3 rounds total
// between each round player can enter shop if they choose to do so
// in order for this to work, there must be a reward system
// if player skips fight, deduct 4 from playerMoney

var playerName;
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

let rounds = [
    0,
    1,
    2
];

let enemyPlayer = [
    {
        name: 'Roborto',
        health: 50,
        attack: 12
    },
    {
        name: 'Amy Android',
        health: 50,
        attack: 12
    },
    {
        name: 'Robo Trumble',
        health: 50,
        attack: 12
    }
];


function gameStart() {
    alert('Welcome to Robot Gladiators!');
    playerName = window.prompt("What is your Robot's name?");
    if (playerName == null) {
        alert('Please enter a name for your Robot!');
        gameStart();
    } else {
        alert(playerName + ' has entered battle with '
            + enemyPlayer[0].name + '!');
        confirmNext()
    }
}



function confirmNext() {
    
    let option = prompt('Would you like to FIGHT in the next round, SKIP the next round, or go to the fighter\'s SHOP?')
    switch (option) {
        case 'fight' || 'FIGHT':
            option = fight();
            break;
        case 'skip' || 'SKIP':
            option = skip();
            break;
        case 'shop' || 'SHOP':
            option = shop();
            break;
    }

}

function shop() {
    alert('Welcome to the fighter\'s shop ' + playerName + '!')
}

function skip() {
    // confirm player wants to skip round
    let confirmSkip = confirm(
        'Are you sure youd like to skip the round?');
    if (confirmSkip === true || confirmSkip === 'true') {
        alert(playerName +
            ' has choosen to skip this round!');
        // deduct playerMoney from playerName
        playerMoney = playerMoney - 8;
        alert(playerName +
            ' has the following amount of money left: '
            + playerMoney)
        console.log('playerMoney', playerMoney);
        confirmNext()
    }
}



function fight() {
    console.log('fight');
    enemyHealth = enemyHealth - playerAttack;
    if (enemyHealth < 0 || enemyHealth === 0) {

    } 
    alert(playerName + ' has attacked ' + enemyNames[0] +
        '! ' + enemyNames[0] + '\'s health is now ' +
        enemyHealth + ' !');
    console.log(enemyNames[0] + '\'s health is now '
        + enemyHealth + ' !');

    playerHealth = playerHealth - enemyAttack;
    alert(enemyNames[0] + ' has attacked ' + playerName +
        '! ' + playerName + ' \'s health is now ' + playerHealth);
    console.log(playerName + ' \'s health is now '
        + playerHealth);
  let continueFight = prompt('Would you like to FIGHT or SKIP this round?')
    if(continueFight === 'FIGHT' || continueFight === 'fight') {
        fight()
    } else {
        skip()
    }

};

function promptFight() {
    prompt(
        'Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose!');
    if (promptFight === 'FIGHT' || promptFight === 'fight') {
        fight()
    } else if (promptFight === 'SKIP' || promptFight === 'skip') {
        skip()
    }
}



endGame = () => {
    alert(playerName + ' has died! GAME OVER!');
    let playAgain = confirm('Would ' + playerName +
        ' like to play again?');
    if (playAgain === true) {
        gameStart()
    } else {
        alert('Thanks for playing!')
    }
};


gameStart()

