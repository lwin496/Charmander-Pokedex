
let charmander = `{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 62,
  "height": 6,
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "order": 5,
  "stats": [
    {
      "base_stat": 39,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 52,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "tsbase_stat": 43,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 60,
      "effort": 0,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 50,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
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
    }
  ],
  "weight": 85
}`

// console.log(charmander)
// Charmander 
charmander = JSON.parse(charmander)
// // charmander name

  let charmanderName = (charmander.name).toUpperCase()
document.getElementById("charmander").innerHTML = charmanderName
// // // charmander abilites
// console.log(charmander)
let charmanderAbility1 = charmander.abilities[0].name
document.getElementById('ability1').innerHTML = charmanderAbility1
let charmanderAbility2 = charmander.abilities[1].name
document.getElementById('ability2').innerHTML = charmanderAbility2
// // Experience and height 
let charmanderHeight = charmander.height
document.getElementById('charmanderHeight').innerHTML = 'Height: ' + charmanderHeight
let charmanderWeight = charmander.weight 
document.getElementById('charmanderWeight').innerHTML = 'Weight: ' + charmanderWeight
// console.log(charmanderHeight)
// // charmander Type 
let charmanderType = charmander.types[0].type.name
document.getElementById("charmanderType").innerHTML = 'Type: ' + charmanderType
// // charmander stats
let charmanderHp = charmander.stats[0].stat.name + ': ' + charmander.stats[0].base_stat
document.getElementById("charmanderHp").innerHTML = charmanderHp
let charmanderAttack = charmander.stats[1].stat.name + ': ' + charmander.stats[1].base_stat
document.getElementById("charmanderAttack").innerHTML = charmanderAttack
let charmanderDefense = charmander.stats[2].stat.name + ': ' + charmander.stats[2].tsbase_stat
document.getElementById("charmanderDefense").innerHTML = charmanderDefense
let charmanderSpeed = charmander.stats[5].stat.name + ': ' + charmander.stats[5].base_stat
document.getElementById("charmanderSpeed").innerHTML = charmanderSpeed
let charmanderSpecialAttack = charmander.stats[3].stat.name + ': ' + charmander.stats[3].base_stat
document.getElementById("charmanderSpecialAttack").innerHTML = charmanderSpecialAttack
let charmanderSpecialDefense = charmander.stats[4].stat.name + ': ' + charmander.stats[4].base_stat
document.getElementById("charmanderSpecialDefense").innerHTML = charmanderSpecialDefense


// console.log(charmanderHp)

// console.log(charmanderName)










