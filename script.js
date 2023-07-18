$(document).ready(onReady);

let enemyHP = 100;
let playerAP = 100;

let player = {
  arcane: {
    cost: 12,
    damage: 14,
  },
  entangle: {
    cost: 23,
    damage: 9,
  },
  dragon: {
    cost: 38,
    damage: 47,
  },
  starfire: {
    cost: 33,
    damage: 25,
  },
};

function onReady() {
  console.log("jquery ready");
  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // *** HANDLERS ***

  $(".attack-btn.arcane-scepter").on("click", handleArcane);
  $(".attack-btn.entangle").on("click", handleEntangle);
  $(".attack-btn.dragon-blade").on("click", handleDragon);
  $(".attack-btn.star-fire").on("click", handleStarFire);
}

function handleArcane() {
  enemyHP -= player.arcane.damage;
  if (enemyHP > 0) {
    $(".hp-text").text(`${enemyHP} HP`);
  }
  if (enemyHP <= 0) {
    enemyHP = 0;
    $(".hp-text").text(`${enemyHP} HP`);
  }

  playerAP -= player.arcane.cost;
  if (playerAP > 0) {
    $(".ap-text").text(`${playerAP} AP`);
  }
  if (playerAP <= 0) {
    playerAP = 0;
  }
}

function handleEntangle() {
  enemyHP -= player.entangle.damage;
  if (enemyHP > 0) {
    $(".hp-text").text(`${enemyHP} HP`);
  }
  if (enemyHP <= 0) {
    enemyHP = 0;
    $(".hp-text").text(`${enemyHP} HP`);
  }

  playerAP -= player.entangle.cost;
  if (playerAP > 0) {
    $(".ap-text").text(`${playerAP} AP`);
  }
  if (playerAP <= 0) {
    playerAP = 0;
  }
}

function handleDragon() {
  enemyHP -= player.dragon.damage;
  if (enemyHP > 0) {
    $(".hp-text").text(`${enemyHP} HP`);
  }
  if (enemyHP <= 0) {
    enemyHP = 0;
    $(".hp-text").text(`${enemyHP} HP`);
  }

  playerAP -= player.dragon.cost;
  if (playerAP > 0) {
    $(".ap-text").text(`${playerAP} AP`);
  }
  if (playerAP <= 0) {
    playerAP = 0;
  }
}

function handleStarFire() {
  enemyHP -= player.starfire.damage;
  if (enemyHP > 0) {
    $(".hp-text").text(`${enemyHP} HP`);
  }
  if (enemyHP <= 0) {
    enemyHP = 0;
    $(".hp-text").text(`${enemyHP} HP`);
  }

  playerAP -= player.starfire.cost;
  if (playerAP > 0) {
    $(".ap-text").text(`${playerAP} AP`);
  }
  if (playerAP <= 0) {
    playerAP = 0;
  }
}

// I got bogged down in this...
// it would have been cool to combine attack functions
// I'll have to finish tomorrow to meet the css expectations
// I just wanted some base functionality, I know I can clean up
// and simplify the conditionals and the rest anyway

// listener
// $(".attack-btn").on('click', findClass)

// function to get each obj class???
// function findClass() {
//     (console.log('🗡️'))

//     // used .attr to get the class for the object
//     let objectClass = $(this).attr('class')
//     console.log(objectClass)
//     // but then I can't get the damage or cost value out
//     console.log($(player[objectClass]['damage']).val())
// }
