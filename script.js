let resultat = ["rien", "rien"]

let txtGauche = document.querySelector('.txtGauche')
let txtDroite = document.querySelector('.txtDroite')

let gauche = document.querySelector('.gauche')
let droite = document.querySelector('.droite')

function check () {
    if (resultat[0] != "rien" && resultat[1] != "rien") {
        
        if ( resultat[0].text === "Ciseaux" && resultat[1].text === "Ciseaux") {
            txtGauche.textContent = "Egalité !"
            txtDroite.textContent = "Egalité !"
            gauche.style.backgroundColor = "lightblue"
            droite.style.backgroundColor = "lightblue"
        }

        if ( resultat[0].text === "Ciseaux" && resultat[1].text === "Feuille") {
            txtGauche.textContent = "Gagné !"
            txtDroite.textContent = "Perdu !"
            gauche.style.backgroundColor = "lightgreen"
            droite.style.backgroundColor = "crimson"
        }

        if ( resultat[0].text === "Ciseaux" && resultat[1].text === "Pierre") {
            txtGauche.textContent = "Perdu !"
            txtDroite.textContent = "Gagné !"
            gauche.style.backgroundColor = "crimson"
            droite.style.backgroundColor = "lightgreen"
        }

        if ( resultat[0].text === "Feuille" && resultat[1].text === "Ciseaux") {
            txtGauche.textContent = "Perdu !"
            txtDroite.textContent = "Gagné !"
            gauche.style.backgroundColor = "crimson"
            droite.style.backgroundColor = "lightgreen"
        }


        if ( resultat[0].text === "Feuille" && resultat[1].text === "Feuille") {
            txtGauche.textContent = "Egalité !"
            txtDroite.textContent = "Egalité !"
            gauche.style.backgroundColor = "lightblue"
            droite.style.backgroundColor = "lightblue"
        }

        if ( resultat[0].text === "Feuille" && resultat[1].text === "Pierre") {
            txtGauche.textContent = "Gagné !"
            txtDroite.textContent = "Perdu !"
            gauche.style.backgroundColor = "lightgreen"
            droite.style.backgroundColor = "crimson"
        }

        if ( resultat[0].text === "Pierre" && resultat[1].text === "Ciseaux") {
            txtGauche.textContent = "Gagné !"
            txtDroite.textContent = "Perdu !"
            gauche.style.backgroundColor = "lightgreen"
            droite.style.backgroundColor = "crimson"
        }

        if ( resultat[0].text === "Pierre" && resultat[1].text === "Feuille") {
            txtGauche.textContent = "Perdu !"
            txtDroite.textContent = "Gagné !"
            gauche.style.backgroundColor = "crimson"
            droite.style.backgroundColor = "lightgreen"
        }

        if ( resultat[0].text === "Pierre" && resultat[1].text === "Pierre") {
            txtGauche.textContent = "Egalité !"
            txtDroite.textContent = "Egalité !"
            gauche.style.backgroundColor = "lightblue"
            droite.style.backgroundColor = "lightblue"
        }

        let btnreset = document.createElement('button')
        btnreset.textContent = "Rejouer"
        btnreset.classList.add('btnReset')

        btnreset.addEventListener('click',function () {
            window.location.href = "http://127.0.0.1:5500/index.html"
        })
        
        let footer = document.querySelector('footer')
        footer.appendChild(btnreset)

    }
}

function choixMainG (event) {
    let numeroGauche = Math.ceil(Math.random()*3)
    let imgMainG
    let txtMainG
    
    if(numeroGauche === 1) {
    
        imgMainG = "img/ciseaux.jpg" ;
    
        txtMainG = "Ciseaux" ;
    
    }else if (numeroGauche === 2) {
    
        imgMainG = "img/feuille.jpg" ;
    
        txtMainG = "Feuille" ;
    
    }else if (numeroGauche === 3) {
    
        imgMainG = "img/pierre.jpg" ;
    
        txtMainG = "Pierre" ;
     
    }

    let mainGauche
    mainGauche = {image: imgMainG, text: txtMainG}

    resultat[0] = mainGauche

    btnG.style.backgroundImage = `url(${imgMainG})`;
    txtGauche.textContent = txtMainG;
    btnG.textContent = '';
    gauche.style.backgroundColor = 'black' ;

    check()

}

function choixMainD (event) {
    let numeroDroite = Math.ceil(Math.random()*3)
    let imgMainD
    let txtMainD
    
    if(numeroDroite === 1) {
    
        imgMainD = "img/ciseaux.jpg" ;
    
        txtMainD = "Ciseaux" ;
    
    }else if (numeroDroite === 2) {
    
        imgMainD = "img/feuille.jpg" ;
    
        txtMainD = "Feuille" ;
    
    }else if (numeroDroite === 3) {
    
        imgMainD = "img/pierre.jpg" ;
    
        txtMainD = "Pierre" ;
     
    }

    let mainDroite
    mainDroite = {image: imgMainD, text: txtMainD}

    resultat[1] = mainDroite

    btnD.style.backgroundImage = `url(${imgMainD})`;
    txtDroite.textContent = txtMainD;
    btnD.textContent = '';
    droite.style.backgroundColor = 'black' ;

    check()

}

let btnG
btnG = document.querySelector('.carteG') ;

let bntD
btnD = document.querySelector('.carteD') ; 

btnG.addEventListener('click', choixMainG, { once: true}) ;

btnD.addEventListener('click', choixMainD, { once: true}) ;

