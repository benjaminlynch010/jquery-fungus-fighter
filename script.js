$(document).ready(onReady);

let enemyHP = 100
let userAP = 100

let player = {
    arcane: {
        cost: 12,
        damage: 14
    },
    entangle: {
        cost: 23,
        damage: 9
    },
    dragon: {
        cost: 38,
        damage: 47
    },
    starfire: {
        cost: 33,
        damage: 25
    }
}


function onReady() {
     console.log('jquery ready')
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    // *** HANDLERS ***
 
    $(".attack-btn.arcane-scepter").on('click', handleArcane)
    $(".attack-btn.entangle").on('click', handleEntangle)
    $(".attack-btn.dragon-blade").on('click', handleDragon)
    $(".attack-btn.star-fire").on('click', handleStarFire)


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function handleArcane() {
enemyHP -= player.arcane.damage
if (enemyHP > 0) {
    $(".hp-text").text(`${enemyHP} HP`)
}
if (enemyHP <= 0) {
    enemyHP = 0
    $(".hp-text").text(`${enemyHP} HP`)
}

}

function handleEntangle() {
enemyHP -= player.arcane.damage
if (enemyHP > 0) {
    $(".hp-text").text(`${enemyHP} HP`)
}
if (enemyHP <= 0) {
    enemyHP = 0
    $(".hp-text").text(`${enemyHP} HP`)
}
}

function handleDragon() {
    enemyHP -= player.dragon.damage
    if (enemyHP > 0) {
        $(".hp-text").text(`${enemyHP} HP`)
    }
    if (enemyHP <= 0) {
        enemyHP = 0
        $(".hp-text").text(`${enemyHP} HP`)
    }
}

function handleStarFire() {
    enemyHP -= player.starfire.damage
    if (enemyHP > 0) {
        $(".hp-text").text(`${enemyHP} HP`)
    }
    if (enemyHP <= 0) {
        enemyHP = 0
        $(".hp-text").text(`${enemyHP} HP`)
    }
}
// let getID = $(this).attr.("id")
// return ID
// user.attacks[getID].damage or cost


