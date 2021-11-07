
var playerName;
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

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

let enemyIterator = 0;

function gameStart() {
    alert('Welcome to Robot Gladiators!');
    playerName = window.prompt("What is your Robot's name?");
    if (playerName == null) {
        alert('Please enter a name for your Robot!');
        // gameStart();
    } else {
        alert(playerName + ' has entered battle with '
            + enemyPlayer[0].name + '!');
        confirmNext()
    }
};

function confirmNext() {
    let option = prompt('Would you like to FIGHT in the next round, SKIP the next round, or go to the fighter\'s SHOP?')
    switch (option) {
        case 'fight' || 'FIGHT':
           if(enemyPlayer[0].health === 0) {
            alert(`${playerName} has entered battle with ${enemyPlayer[enemyIterator].name}!`);
          fight()
            } else {
            console.log(enemyPlayer[enemyIterator]);
            option = fight();
            }
            break;
        case 'skip' || 'SKIP':
            option = skip();
            break;
        case 'shop' || 'SHOP':
            option = shop();
            break;
    }

};

function nextRound() {
    enemyIterator++
    
    console.log(enemyPlayer[enemyIterator].name);
    confirmNext()
}

function fight() {
    


    if (enemyPlayer[enemyIterator].health <= 0) {
        alert(enemyPlayer[enemyIterator].name + ' is dead!');
        nextRound()
    }

    console.log('fight');

    

    // Shows player attack on enemy and displays enemy Health
    alert(playerName + ' has attacked ' + enemyPlayer[enemyIterator].name +
        '! ' + enemyPlayer[enemyIterator].name + '\'s health is now ' +
        enemyPlayer[enemyIterator].health + ' !');
    // Enemy health deducted by player attack
    enemyPlayer[enemyIterator].health = enemyPlayer[enemyIterator].health - playerAttack;
    // Show current enemy health
    console.log(enemyPlayer[enemyIterator].health);


    // logs enemyPlayers new health
    console.log(enemyPlayer[enemyIterator].name + '\'s health is now '
        + enemyPlayer[enemyIterator].health + ' !');
    // players new health after enemy attack
    playerHealth = playerHealth - enemyPlayer[enemyIterator].attack;
    if(playerHealth <= 0) {
        alert(`${playerName} has died! Game Over!`);
        console.log(`${playerName} has died! Game Over!`);
        gameStart()
    }
    // Shows enemyPlayer has attacked player,
    // shows players new health post attack
    alert(enemyPlayer[enemyIterator].name + ' has attacked ' + playerName +
        '! ' + playerName + ' \'s health is now ' + playerHealth);
    // logs players new health after attack
    console.log(playerName + ' \'s health is now ' + playerHealth);
    console.log('end of set');
    // continueFight variable prompts user to fight or skip
    let continueFight = prompt('Would you like to FIGHT or SKIP this round?')
    // Player either fights round or skips round
    if (continueFight === 'FIGHT' || continueFight === 'fight') {
        console.log('fight chosen');
        fight()
    } else if (continueFight === 'SKIP' || continueFight === 'skip') {
        enemyIterator++;
        console.log(enemyIterator);
        console.log('skip chosen');
        skip()
    }
};

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

gameStart()

console.log(enemyPlayer[0].name);





