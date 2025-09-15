//Här börjar koden för att realtidsvalidera inputen i formuläret för bokning.
document.getElementById("telefon").addEventListener("input", valideraTelefon);
document.getElementById("epost").addEventListener("input", valideraEpost);
document.getElementById("förnamn").addEventListener("input", valideraFörnamn);
document.getElementById("efternamn").addEventListener("input", valideraEfternamn);


// Skickar fomuläret vid godkända inputs.
document.getElementById("skickaInKnapp").addEventListener("click", function (event) {
    event.preventDefault();

    const allaInputs = document.querySelectorAll("#kontaktform input");
    let allaGodkända = true;
    allaInputs.forEach(input => {
        if (!input.classList.contains("giltig-input")) {
            allaGodkända = false;
        }
    })


    if (allaGodkända) {
        alert("skickat!")
        document.querySelector("#kontaktform textarea").value = "";
        allaInputs.forEach(input => input.value = "");
        allaInputs.forEach(input => input.classList.remove("giltig-input"))
    } else {
        alert("Vänligen fyll i alla obligatoriska fält korrekt");
    }
});

// Metod för att validera telefonnummret.
function valideraTelefon() {
    let telefon = document.getElementById("telefon").value;
    const telefonFormat = /^\+?[0-9]{10,15}$/;
    const telefonInput = document.getElementById("telefon"); 

    //Kollar om telefonnummret är i korrekt format
    if (!telefonFormat.test(telefon)) {
        telefonInput.classList.add("ogiltig-input");
        telefonInput.classList.remove("giltig-input");
    } else {
        telefonInput.classList.add("giltig-input");
        telefonInput.classList.remove("ogiltig-input");
        return true;
    }
}


// Metod för att validera Epost
function valideraEpost() {
    let epost = document.getElementById("epost").value;
    const epostFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const epostInput = document.getElementById("epost"); 

    // Kollar om eposten är i korrekt format.
    if (!epostFormat.test(epost)) {
        epostInput.classList.add("ogiltig-input");
        epostInput.classList.remove("giltig-input");
    } else {
        epostInput.classList.add("giltig-input");
        epostInput.classList.remove("ogiltig-input");
        return true;
    }
}


//Metod för att validera förnamnet.
function valideraFörnamn() {
    let förnamn = document.getElementById("förnamn").value;
    const förnamnFormat = /^[a-zA-ZåäöÅÄÖ\s'-]{2,}$/;
    const förnamnInput = document.getElementById("förnamn"); 


    // Kollar om namn är i korrekt format.
    if (!förnamnFormat.test(förnamn)) {
        förnamnInput.classList.add("ogiltig-input");
        förnamnInput.classList.remove("giltig-input");
    } else {
        förnamnInput.classList.add("giltig-input");
        förnamnInput.classList.remove("ogiltig-input");
        return true;
    }
}


//Metod för att validera efternamnet.
function valideraEfternamn() {
    let efternamn = document.getElementById("efternamn").value;
    const efternamnFormat = /^[a-zA-ZåäöÅÄÖ\s'-]{2,}$/;
    const efternamnInput = document.getElementById("efternamn");


    if (!efternamnFormat.test(efternamn)) {
        efternamnInput.classList.add("ogiltig-input")
        efternamnInput.classList.remove("giltig-input")
    } else {
        efternamnInput.classList.add("giltig-input")
        efternamnInput.classList.remove("ogiltig-input")
        return true
    }
}


//Metod för att validera att inputfältet inte är tomt (Meddelandet dvs textArea får vara tomt)
function inputInteTomt() {
    const allaInputs = document.querySelectorAll("#kontaktform input");
    let allaIfyllda = true;


    allaInputs.forEach(inputs => { 
        if (inputs.value === '') {
            allaIfyllda = false;
            inputs.classList.add("ogiltig-input");
        } else {
            inputs.classList.remove("ogiltig-input");
        }
    });
    return allaIfyllda

}