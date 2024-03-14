// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.


window.onload = function() {
    let rimuoviTwiter = document.querySelector(".blog-sidebar div:nth-child(3) .list-unstyled li:nth-of-type(2)");
    rimuoviTwiter.remove();
}

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

let rimuoviAlClick = document.getElementsByClassName("stretched-link");
let divDaRimuovere = document.getElementsByClassName("col-md-6")

for (let i = 0; i < rimuoviAlClick.length; i++) {
    rimuoviAlClick[i].addEventListener('click', function() {
        
        for (let x = 0; x < divDaRimuovere.length; x++) {
            divDaRimuovere[x].remove();
        }
    });
}

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
 
let autori = document.querySelectorAll(".blog-post-meta a")
console.log(autori);

for (let i = 0 ; i < autori.length; i++) {
    autori[i].addEventListener('mouseover', function() {
        alert(this.textContent);
    })
}


