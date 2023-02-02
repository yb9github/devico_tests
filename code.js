const animal_json = require("./animal.json");


legs_count = 
{
    "chikens": 2,
    "cows": 4,
    "pigs": 4
}

legs = 0;

for (var key in animal_json){
    legs += animal_json[key] * legs_count[key];
}

console.log(legs);
