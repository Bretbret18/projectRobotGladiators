// Player Info
var playerName;
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 12;

// // TO DO: 
// - Make enemy values random
// Enemy info array
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

// current enemy iterator
let enemyIterator = 0;

if(playerHealth <= 0){
    alert(`${playerName} has died. Game Over!`)
    gameStart()
}

// Start Game function
function gameStart() {
    alert('Welcome to Robot Gladiators!');
    playerName = window.prompt("What is your Robot's name?");
    if (playerName == null) {
        alert('Please enter a name for your Robot!');
        // gameStart();
    } else {
        alert(playerName + ' has entered battle with '
            + enemyPlayer[enemyIterator].name + '!');
        confirmNext()
    }
};

// TO DO:
// - Create different types of potions the player can buy
// - Make sure playerMoney functions properly per buy
// - player must be able to return to confirmNext()
function shop() {
    if (playerMoney <= 0) {
        alert(`${playerName} has no $ left!`)
        console.log(playerMoney);
        confirmNext()
    }
    const shopChoice = prompt(`Welcome to the Shop! Would you
     like to SHOP for a potion or RETURN to menu?`)
    if (shopChoice === 'shop' || shopChoice === 'SHOP') {
        const potionChoice = prompt(`Would you like to buy a
        HEALTH potion or an ATTACK potion?`)
        
        if (potionChoice === 'health' || potionChoice === 'HEALTH') {
            if(playerMoney <= 0){
                alert(`${playerName} has no $ left!`)
        console.log(playerMoney);
        confirmNext()
            }
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 4;
            console.log(playerHealth);
            console.log(playerMoney);
            alert(`Player health has increased to ${playerHealth}!`)
            alert(`${playerName} now has ${playerMoney}$!`)
            shop()
        } else if (potionChoice === 'attack' || potionChoice === 'ATTACK') {
            if(playerMoney <= 0){
                alert(`${playerName} has no $ left!`)
        console.log(playerMoney);
        confirmNext()
            }
            playerAttack = playerAttack + 2;
            playerMoney = playerMoney - 4;
            console.log(playerAttack);
            console.log(playerMoney);
            alert(`Player attack has increased to ${playerAttack}!`)
            alert(`${playerName} now has ${playerMoney}$!`)
            shop()
        } else {
            alert(`You must choose a potion type!`)
            shop()
        }

    } else if (shopChoice === 'return' || shopChoice === 'RETURN') {
        confirmNext()
    } else {
        alert(`You must choose to either SHOP potions or
         RETURN to main menu!`)
        shop()
    }
}



// Skip fight function
function skip() {
    // confirm player wants to skip round
    let confirmSkip = confirm(
        'Are you sure youd like to skip the round?');
    if (confirmSkip === true || confirmSkip === 'true') {
        alert(playerName +
            ' has choosen to skip this round!');
            
        // deduct playerMoney from playerName
        playerMoney = playerMoney - 8;
        if(playerMoney <= 0) {
            playerMoney = 0;
        }
        alert(playerName +
            ' has the following amount of money left: '
            + playerMoney)
        console.log('playerMoney', playerMoney);
        nextRound()
    }
};

// Player Choice: fight, skip, or shop functions
function confirmNext() {
    let option = prompt(`Would you like to FIGHT in the
     next round, SKIP the next round, or go to
      the fighter\'s SHOP?`)
    switch (option) {
        case 'fight' || 'FIGHT':
            if (enemyPlayer[0].health === 0) {
                alert(`${playerName} has entered battle with
             ${enemyPlayer[enemyIterator].name}!`);
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
        case null:
            option = gameStart()
    }

};

// Iterate to next enemy player
function nextRound() {
    enemyIterator++
    console.log(enemyPlayer[enemyIterator].name);
    confirmNext()
};

// Fight function
function fight() {
    if (enemyPlayer[enemyIterator].health <= 0) {
        alert(enemyPlayer[enemyIterator].name + ' is dead!');
        nextRound()
    }
    console.log('fight');
    alert(playerName + ' has attacked '
        + enemyPlayer[enemyIterator].name +
        '! ' + enemyPlayer[enemyIterator].name +
        '\'s health is now ' +
        enemyPlayer[enemyIterator].health + ' !');

    enemyPlayer[enemyIterator].health =
        enemyPlayer[enemyIterator].health - playerAttack;

    console.log(enemyPlayer[enemyIterator].health);

    console.log(enemyPlayer[enemyIterator].name +
        '\'s health is now '
        + enemyPlayer[enemyIterator].health + ' !');

    playerHealth = playerHealth -
        enemyPlayer[enemyIterator].attack;

    if (playerHealth <= 0) {
        alert(`${playerName} has died! Game Over!`);
        console.log(`${playerName} has died! Game Over!`);
        location.reload()
    }

    alert(enemyPlayer[enemyIterator].name +
        ' has attacked ' + playerName +
        '! ' + playerName + ' \'s health is now ' +
        playerHealth);

    console.log(playerName + ' \'s health is now ' +
        playerHealth);
    console.log('end of set');

    let continueFight = prompt
        ('Would you like to FIGHT or SKIP this round?')

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



gameStart()







