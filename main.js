
//Dichiaro le variabili per il programma
let inserisciTesto = prompt("Azione necessaria, inserisci tui la tua email");
let emailNelServer = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"]
let emailRisultato
//ciclo for per confronto con il server
for (let i=0; i < emailNelServer.length;i++){
    if(emailNelServer[i]!=inserisciTesto){ 
        alert(emailRisultato="Mi dispaice ma non è registrato");
        console.log("non sei regitrato");  
        break;        
    }
    else if(emailNelServer[i]==inserisciTesto){
        alert(emailRisultato="La sua email è nei nostri registri, benvenuto!");
        break;
    }
}
//reminder fisso in pagina
document.getElementById("demo").innerHTML = emailRisultato;