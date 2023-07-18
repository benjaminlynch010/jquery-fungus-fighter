$(document).ready(onReady);

let enemyHP = 100
let userAP = 100

let userAttacks = [
    {
        name: 'arcane',
        cost: 12,
        damage: 14
        },
    {
        name: 'entangle',
        cost: 23,
        damage: 9
     },
    {
        name: 'dragon',
        cost: 38,
        damage: 47
        },
    {
        name: 'starfire',
        cost: 33,
        damage: 25
        }
    ]

function onReady() {
    $(".attack-btn").on('click', handleAttack)
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $.each(userAttacks, function(index, obj){ 
        $.each(obj, function(key, value){
            if (key == "starfire" ) {
                console.log("HP Damage:", value)
            }
        });
    });
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function handleAttack() {
    console.log('🗡️')


}