
let charizard = `{
      "abilities": [
        {
          "name": "blaze"
        },
        {
          "name": "solar-power"
        }
      ],
      "base_experience": 240,
      "height": 17,
      "id": 6,
      "is_default": true,
      "name": "charizard",
      "order": 7,
      "stats": [
        {
          "base_stat": 78,
          "effort": 0,
          "stat": {
            "name": "hp"
          }
        },
        {
          "base_stat": 84,
          "effort": 0,
          "stat": {
            "name": "attack"
          }
        },
        {
          "base_stat": 78,
          "effort": 0,
          "stat": {
            "name": "defense"
          }
        },
        {
          "base_stat": 109,
          "effort": 3,
          "stat": {
            "name": "special-attack"
          }
        },
        {
          "base_stat": 85,
          "effort": 0,
          "stat": {
            "name": "special-defense"
          }
        },
        {
          "base_stat": 100,
          "effort": 0,
          "stat": {
            "name": "speed"
          }
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "fire"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "flying"
          }
        }
      ],
      "weight": 905
    }`
    
charizard = JSON.parse(charizard)
// charizard  name
let charizardName = (charizard.name).toUpperCase()
document.getElementById("charizard").innerHTML = charizardName
// // charizard abilites
let charizardAbility1 = charizard.abilities[0].name
document.getElementById('ability1Charizard').innerHTML = charizardAbility1
let charizardAbility2 = charizard.abilities[1].name
document.getElementById('ability2Charizard').innerHTML = charizardAbility2
// charizard  Experience and height 
let charizardHeight = charizard.height
document.getElementById('charizardHeight').innerHTML = 'Height: ' + charizardHeight


let charizardweight = charizard.weight
document.getElementById("charizardWeight").innerHTML = 'Weight: ' + charizardweight

// charizard Type 
let charizardType = charizard.types[0].type.name + ' and ' + charizard.types[1].type.name
document.getElementById("charizardType").innerHTML = 'Type: ' + charizardType
// charizard stats
let charizardHp = charizard.stats[0].stat.name + ': ' + charizard.stats[0].base_stat
document.getElementById("charizardHp").innerHTML = charizardHp

let charizardAttack = charizard.stats[1].stat.name + ': ' +charizard.stats[1].base_stat

document.getElementById("charizardAttack").innerHTML = charizardAttack

let charizardDefense = charizard.stats[2].stat.name + ': ' + charizard.stats[2].base_stat
document.getElementById("charizardDefense").innerHTML = charizardDefense

let charizardSpeed = charizard.stats[5].stat.name + ': ' + charizard.stats[5].base_stat
document.getElementById("charizardSpeed").innerHTML = charizardSpeed

let charizardSpecialAttack = charizard.stats[3].stat.name + ': ' + charizard.stats[3].base_stat
document.getElementById("charizardSpecialAttack").innerHTML = charizardSpecialAttack

let charizardSpecialDefense = charizard.stats[4].stat.name + ': ' + charizard.stats[4].base_stat
document.getElementById("charizardSpecialDefense").innerHTML = charizardSpecialDefense



