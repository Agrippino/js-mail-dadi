
let inserisciTesto = prompt("Azione necessaria, inserisci tui la tua email");
let emailNelServer = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"]
let emailRisultato
let variabileZero = 0
//ciclo for per confronto con il server
for (let i=0; i < emailNelServer.length;i++){
    if(emailNelServer[i]!=inserisciTesto){     
    }
    else {
        variabileZero ++
    alert(emailRisultato="La sua email è nei nostri registri, benvenuto!");
    break;
    }
}
if (variabileZero == 0){
    alert(emailRisultato= "email non presente");
}

//reminder fisso in pagina
document.getElementById("demo").innerHTML = emailRisultato;