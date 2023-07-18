$(document).ready(onReady);

let enemyHP = 100;
let playerAP = 100;

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
  playerAP -= 12;
  enemyHP -= 14;
  render();
}
function handleEntangle() {
  playerAP -= 23;
  enemyHP -= 9;
  render();
}
function handleDragon() {
  playerAP -= 38;
  enemyHP -= 47;
  render();
}
function handleStarFire() {
  playerAP -= 33;
  enemyHP -= 25;
  render();
}

// ***  RENDER  ***

function render() {
  // conditional for playerAP
  if (playerAP < 0) {
    playerAP = 0;

    // remove all attack buttons
    $(".attack-btn").remove();
    // add new ones with disabled type
    $(".attacks").append(`
      <button class="attack-btn arcane-scepter" type="button" disabled></button>
      <button class="attack-btn entangle" type="button" disabled></button>
      <button class="attack-btn dragon-blade"type="button" disabled></button>
      <button class="attack-btn star-fire"type="button" disabled></button>
    `);

    // remove freaky fungus class
    $(".freaky-fungus").remove();
    // append new one for jump
    $(".enemy").append(`
      <div class="freaky-fungus jump">
      </div>
      `);
  } // end if
  
  // PLAYER AP RENDER
  $(".ap-text").text(`${playerAP} AP`);

  
  // conditional for enemy HP
  if (enemyHP < 0) {
    enemyHP = 0;

    // remove class
    $(".freaky-fungus").remove();
    // append new one for dead
    $(".enemy").append(`
      <div class="freaky-fungus dead">
      </div>
    `);
  } // end if
  
  // ENEMY HP RENDER
  $(".hp-text").text(`${enemyHP} HP`);
} // end render

// I got bogged down in this...
// it would have been cool to combine attack functions
// I'll have to finish tomorrow to meet the css expectations

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
