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
    