window.addEventListener('load', (event) => {

    function compareScore(a,b){
        return a.score - b.score;
    }

    function writeScore(array){
        let div = document.getElementById("hightscore");    
        div.innerHTML = "";
        let place = 0;
        array.forEach(function(element){
            place ++;
            let p = document.createElement("p");
            p.innerHTML = place+" : "+element.name +" - "+element.score;
            let div = document.getElementById("hightscore");
            div.appendChild(p);   
        });
    }

    if(window.localStorage.getItem('higscores') !== null){
        writeScore(JSON.parse(window.localStorage.getItem('higscores')))
    }

    let maxtry = 0;

    let random = Math.floor(Math.random() * 99) + 1; 

    let nb = 0;

    let count = 0;

    let inputText = document.getElementById("num");
    inputText.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("button").click();
        }
    });

    let button = document.getElementById("button");
    button.onclick = (event) => {
        count ++;
        nb = parseInt(document.getElementById("num").value);
        if(nb !== random && count == maxtry){
            document.getElementById("alert").innerText  = "C'est perdu. Vous avez attein le nombre d'essai maximum, le nombre a trouvé était "+random+".";
            document.getElementById("button").disabled = true;
        }else if(nb > random){
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

            writeScore(highscores);
            
        }
    };

    let res = document.getElementById("restart");
    res.onclick = (event) => {
        document.getElementById("diff").style.display ="initial";  
        document.getElementById("game").style.display = "none";
        random = Math.floor(Math.random() * 99) + 1; 
        nb = 0;
        count = 0;
        document.getElementById("button").disabled = false;
        document.getElementById("alert").innerText  = "";
        document.getElementById("scoreperso").innerText  = "";
        document.getElementById("num").value  = 1;
    }

    let hidScore = document.getElementById("displayScore");
    hidScore.onclick = (event) => {
        let stateHidden = document.getElementById("divHightscore").hidden;   
        if(!stateHidden){
            document.getElementById("divHightscore").hidden = true;  
        }else{
            document.getElementById("divHightscore").hidden = false;  
        }
    }

    let resScore = document.getElementById("resetScore");
    resScore.onclick = (event) => {
        window.localStorage.removeItem('higscores');
        let div = document.getElementById("hightscore");    
        div.innerHTML = "";
        let infName = document.getElementById("scoreSearch");
        infName.innerHTML = "";
    }

    let inputSearch = document.getElementById("sName");
    inputSearch.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("searchName").click();
        }
    });

    let search = document.getElementById("searchName");
    search.onclick = (event) => {
        let index = 0;
        let find = false;
        let name = document.getElementById("sName").value; 
        let highscores = JSON.parse(window.localStorage.getItem('higscores'));
        highscores.forEach(function(element){
            index ++;
            if(name === element.name){
                let infName = document.getElementById("scoreSearch");
                infName.innerHTML = index+" : "+element.name +" - "+element.score;
                find = true;
            }
        })
        if(!find){
            let infName = document.getElementById("scoreSearch");
            infName.innerHTML = "Le nom rentrer n'est pas présent dans le classement";
        }
    }

    let easy = document.getElementById("easy");
    easy.onclick = ( event ) =>{
        document.getElementById("diff").style.display ="none";  
        document.getElementById("game").style.display = "initial";  
        maxtry = 0;
    }

    let normal = document.getElementById("normal");
    normal.onclick = ( event ) =>{
        document.getElementById("diff").style.display ="none";  
        document.getElementById("game").style.display = "initial";  
        maxtry = 20;
    }

    let difficult = document.getElementById("difficult");
    difficult.onclick = ( event ) =>{
        document.getElementById("diff").style.display ="none";  
        document.getElementById("game").style.display = "initial";  
        maxtry = 5;
    }

});