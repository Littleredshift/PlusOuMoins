window.addEventListener('load', (event) => {

    function compareScore(a,b){
        return a.score - b.score;
    }

    function displayHighScore(array){
        let div = document.getElementById("hightscore");    
        div.innerHTML = "";
        array.forEach(function(element){
            let p = document.createElement("p");
            p.innerHTML = element.name +" : "+element.score;
            let div = document.getElementById("hightscore");
            div.appendChild(p);
        });
    }

    if(window.localStorage.getItem('higscores') !== null){
        displayHighScore(JSON.parse(window.localStorage.getItem('higscores')))
    }

    let random = Math.floor(Math.random() * 99) + 1; 

    let nb = 0;

    let count = 0;

    let button = document.getElementById("button");
    button.onclick = (event) => {
        count ++;
        nb = parseInt(document.getElementById("num").value);
        console.log(nb);
        if(nb > random){
            document.getElementById("alert").innerText  = "C'est moins";
        }else if(nb < random){
            document.getElementById("alert").innerText  = "C'est plus";
        }else if(nb == random){
            document.getElementById("button").disabled = true;

            document.getElementById("alert").innerText  = "";
            alert("Bravo, la valeur a trouve etait "+nb+" vous l'avez trouver en "+count+" coup");

            let user = {};
            user.name = prompt("Veillez entrer votre nom");
            user.score = count;

            let highscores;

            if(window.localStorage.getItem('higscores') !== null){
                highscores = JSON.parse(window.localStorage.getItem('higscores'));
                highscores.push(user);
                highscores.sort(compareScore);
            }else{
                highscores = [];
                highscores.push(user);    
            }

            let place = highscores.indexOf(user)+1;
            let score = "Vous êtes à la place numero "+place+ " du classement avec un score de "+user.score
            document.getElementById("scoreperso").innerText  = score;

            window.localStorage.setItem('higscores', JSON.stringify(highscores));

            displayHighScore(highscores);
        }
    };

    let res = document.getElementById("restart");
    res.onclick = (event) => {
        random = Math.floor(Math.random() * 99) + 1; 
        console.log(random);
        nb = 0;
        count = 0;
        document.getElementById("button").disabled = false;
        document.getElementById("alert").innerText  = "";
        document.getElementById("scoreperso").innerText  = "";
        document.getElementById("num").value  = 1;
    }

});