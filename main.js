
//Dichiaro le variabili per il programma
let inserisciTesto = prompt("Azione necessaria, inserisci tui la tua email");
let emailNelServer = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"]
let emailNonAccettata
//ciclo for per confronto con il server
for (let i=0; i < emailNelServer.length;i++){
    if(inserisciTesto[i]!=emailNelServer){ 
        alert( emailNonAccettata="Mi dispaice ma non è registrato");
        console.log("non sei regitrato");  
        break;        
    }
}
//reminder fisso in pagina
document.getElementById("demo").innerHTML = emailNonAccettata;