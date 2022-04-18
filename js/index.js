
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













// charizard

// charizard = JSON.parse(charizard)
// // charizard  name
// let charizardName = (charizard.name).toUpperCase()
// document.getElementById("charizard").innerHTML = charizardName
// // // charizard abilites
// let charizardAbility1 = charizard.abilities[0].name
// document.getElementById('ability1Charizard').innerHTML = charizardAbility1
// let charizardAbility2 = charizard.abilities[1].name
// document.getElementById('ability2Charizard').innerHTML = charizardAbility2
// // charizard  Experience and height 
// let charizardHeight = charizard.height
// document.getElementById('charizardHeight').innerHTML = 'Height: ' + charizardHeight


// let charizardweight = charizard.weight
// document.getElementById("charizardWeight").innerHTML = 'Weight: ' + charizardweight

// // charizard Type 
// let charizardType = charizard.types[0].type.name + ':' + charizard.types[1].type.name
// document.getElementById("charizardType").innerHTML = 'Type: ' + charizardType
// // charizard stats
// let charizardHp = charizard.stats[0].stat.name + ': ' + charizard.stats[0].base_stat
// document.getElementById("charizardHp").innerHTML = charizardHp

// let charizardAttack = charizard.stats[1].stat.name + ': ' +charizard.stats[1].base_stat

// document.getElementById("charizardAttack").innerHTML = charizardAttack

// let charizardDefense = charizard.stats[2].stat.name + ': ' + charizard.stats[2].base_stat
// document.getElementById("charizardDefense").innerHTML = charizardDefense

// let charizardSpeed = charizard.stats[5].stat.name + ': ' + charizard.stats[5].base_stat
// document.getElementById("charizardSpeed").innerHTML = charizardSpeed

// let charizardSpecialAttack = charizard.stats[3].stat.name + ': ' + charizard.stats[3].base_stat
// document.getElementById("charizardSpecialAttack").innerHTML = charizardSpecialAttack

// let charizardSpecialDefense = charizard.stats[4].stat.name + ': ' + charizard.stats[4].base_stat
// document.getElementById("charizardSpecialDefense").innerHTML = charizardSpecialDefense





