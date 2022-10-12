let random = Math.floor(Math.random() * 99) + 1; 

console.log(random);

let nb = prompt("entrer un nombre entre 1 et 99");

console.log(nb);

while(nb != random){
    if(nb > random){
        nb = prompt("c'est moins");
    }else{
        nb = prompt("c'est plus");
    }
}
    