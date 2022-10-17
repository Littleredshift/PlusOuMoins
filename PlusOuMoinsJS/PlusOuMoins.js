function compareScore(a,b){
    return a.score - b.score;
}

function displayHighScore(array){
    array.forEach(function(element){
        console.log(element.name + " : " + element.score);
    });
}


let random = Math.floor(Math.random() * 99) + 1; 

console.log(random);

let nb = prompt("Entrer un nombre entre 1 et 99");

console.log(nb);

let count = 1;

while(nb != random){
    if(nb > random){
        nb = prompt("C'est moins");
    }else{
        nb = prompt("C'est plus");
    }
    count ++;
}

alert("Bravo, la valeur a trouve etait "+nb+" vous l'avez trouver en "+count+" coup");


let user = {};
user.name = prompt("Veillez entrer votre nom");
user.score = count;

if(window.localStorage.getItem('higscores') !== null){
    let highscores = JSON.parse(window.localStorage.getItem('higscores'));
    highscores.push(user);
    highscores.sort(compareScore);
    console.log("vous êtes à la place numero "+highscores.indexOf(user) + " du classement avec un score de "+user.score); 
    window.localStorage.setItem('higscores', JSON.stringify(highscores));
}else{
    let highscores = [];
    highscores.push(user);
    window.localStorage.setItem('higscores', JSON.stringify(highscores));
}

