// variabile error per controllo input utente
let error = false
// variabile prezzo biglietto
let ticketPrice;

// contenitore dove verrà scritto il prezzo
const priceContainer = document.getElementById('price');
console.log(priceContainer)

// Richiesta all'utente dei chilometri da percorrere
const customerKilometers = parseFloat(prompt('Quanti chilometri desidera percorrere?'));
console.log(customerKilometers);

// Richiesta all'utente dell'età del passeggero
const customerAge = parseInt(prompt('Quanti anni ha il passeggero?'));
console.log(customerAge);

// controllo su input utente
if(isNaN(customerKilometers) || isNaN(customerAge) || customerKilometers <= 0 || customerAge <= 0 || customerAge > 100){
    error=true;
}


// calcolo effettivo del prezzo del biglietto
if(!error){
    // calcolo prezzo senza sconto
    ticketPrice = (customerKilometers * 0.21).toFixed(2);
    console.log('Prezzo del biglietto senza sconti: ' + ticketPrice);
    // calcolo sconto e modifica prezzo
    if (customerAge < 18){
        const sconto = ((ticketPrice/100)*20).toFixed(2);
        console.log("C'è uno sconto di: " + sconto + "$");
        ticketPrice = ticketPrice - sconto;
    } else if (customerAge > 65){
        const sconto = ((ticketPrice/100)*20).toFixed(2);
        console.log("C'è uno sconto di: " + sconto + "$");
        ticketPrice = ticketPrice - sconto;
    } else {
        console.log("Non hai diritto ad alcun sconto mi dispiace")
    }
} else {
    alert("Inserimento Input Errati. Si prega di riprovare");
    ticketPrice = "Error";
}

// stampa su pagina
priceContainer.innerText = ticketPrice + '$';

