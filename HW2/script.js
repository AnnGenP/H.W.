let birthYear = parseInt(prompt("What's your birth year ?"));
let city = prompt("What city do you live in?");
let currentYear = new Date().getFullYear();
let sport = prompt("What sport do you prefer?");


let age = currentYear - birthYear
let message = "Information about the user:\n\n"
message += "Age:" + age +"years\n"

const capitals = {
    'Kyiv': 'Ukraine',
    'Washington': 'USA',
    'London': 'UK'
};

if (city) {
    if (city in capitals) {
       message += "You live in the capital" + city + "," + capital[city] + "\n"

    } else {
        message += "You live in city" + city+"\n"
    } 
} else {
    message += "You didn't provide information about your city\n";
}
   
let champion = "";
if (sport === "football") {
  champion = "Lionel Messi";
} else if (sport === "tennis") {
  champion = "Serena Williams";
} else if (sport === "basketball") {
  champion = "LeBron Jemes";
} else{
    message += "You didn't provide information about your sport\n";
}


if (champion !== "") {
  message += "\n Cool! What to be like " + champion + "?";
}

alert(message)
