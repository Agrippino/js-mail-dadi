
let inserisciTesto = prompt("Azione necessaria, inserisci tui la tua email");
let emailServer = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"]
let emailNonAccettata

for (let i=0; i < emailServer.length;i++){
    if(inserisciTesto[i]!=emailServer){ 
        alert( emailNonAccettata="Mi dispaice ma non è registrato");
        console.log("non sei regitrato");  
        break;        
    }
}
document.getElementById("demo").innerHTML = emailNonAccettata;