
let inserisciTesto = prompt("Azione necessaria, inserisci tui la tua email");
let email = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"]

for (let i=0; i < email.length;i++){
    if(inserisciTesto[i]!=email){ 
        alert("Mi dispaice ma non è registrato");
        console.log("non sei regitrato");  
        break;        
    }
}
