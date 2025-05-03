const padlOrel = Math.random() < 0.5;

const vysledek = document.querySelector('.vysledek')

if (padlOrel) {
    document.body.innerHTML += "Padl Orel"
} else {
    document.body.innerHTML += "Padla panna"
}

const mince = document.querySelector('.mince')
if (padlOrel) {
    mince.classList.add('mince--orel')
} else {
    mince.classList.add('mince-panna')
}