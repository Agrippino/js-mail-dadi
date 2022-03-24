//inserisco le mie variabili 
let numeroGiocatore = Math.floor(Math.random(1) * 6);
let numeroComputer = Math.floor(Math.random(1) * 6); 
let risultatoGioco

//giochiamo
if(numeroGiocatore > numeroComputer){
    alert(risultatoGioco="Hai vinto tu! Complimenti!");
    console.log("ha vinto il giocatore"); 
}
else if(numeroGiocatore<numeroComputer){
    alert(risultatoGioco="Hai perso! Mi dispiace!");
    console.log("ha perso il giocatore"); 
}
else {
    alert(risultatoGioco="Alle volte capita di pareggiare!");
    console.log("giocatore e compiuter hanno pareggiato");
    }

document.getElementById("demo").innerHTML = risultatoGioco;




/*document.getElementById("demo").innerHTML = emailRisultato;*/