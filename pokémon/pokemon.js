/* 
fire > grass
fire < water
fire = electric
water < grass
water < electric
grass = electric
 */
function Pokemon (type, attack, defense, hp){
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
}


function calculateDamage(atk_element, def_element, atk_damage, def_points ) {
    effectiveness = 1
    
    if(atk_element == "fire" && def_element == "grass"){
        effectiveness = 2
    }
    else if (atk_element == "grass" && def_element == "fire"){
        effectiveness = 0.5
    }
    else if (atk_element == "fire" && def_element == "water") {
            effectiveness = 0.5
    }
    else if (atk_element == "water" && def_element == "fire") {
        effectiveness = 2
    }
    else if (atk_element == "water" && def_element == "grass") {
        effectiveness = 0.5
    }
    else if (atk_element == "grass" && def_element == "water") {
        effectiveness = 2
    }
    else if (atk_element == "water" && def_element == "electric") {
        effectiveness = 0.5
    }
    else if (atk_element == "electric" && def_element == "water") {
        effectiveness = 2
    } else {
        effectiveness = 1
    }
    damage = 50 * (atk_damage / def_points) * effectiveness 

    return damage
}

let pikachu = Pokemon("electric", 100, 80, 200)
let squirtle = Pokemon("water", 100, 80, 200)

let choices = [Pokemon("electric", 100, 80, 200), Pokemon("water", 100, 80, 200)].shuffle;



calculateDamage(pikachu.type, squirtle.type, pikachu.attack, squirtle.defense)

calculateDamage("grass", "fire", 35, 5)

calculateDamage("electric", "fire", 100, 100)