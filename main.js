// VARIABLES :

const divLettres = document.querySelector("#div-lettres");
const divOptions = document.querySelector("#options");
const inputUtilisateur = document.querySelector("#input");
const SectionNouvellePartie = document.querySelector("#nouvelle-partie");
const boutonNouvellePartie = document.querySelector("#bouttonNouvellePartie");
const canvas = document.querySelector("#canvas");
const resultat = document.querySelector("#resultat");


// OPTIONS DE DEBUT DE PARTIE :

let options = {
  fruits: [
    "Abricot",
    "Airelle",
    "Amande",
    "Ananas",
    "Avocat",
    "Banane",
    "Cassis",
    "Cerise",
    "Châtaigne",
    "Citron",
    "Clémentine",
    "Fraise",
    "Framboise",
    "Fruit de la passion",
    "Grenade",
    "Kiwi",
    "Litchi",
    "Mandarine",
    "Mangue",
    "Melon",
    "Mirabelle",
    "Myrtille",
    "Nectarine",
    "Orange",
    "Pamplemousse",
    "Papaye",
    "Pastèque",
    "Pêche",
    "Poire",
    "Pomme",
    "Raisin",
    "Tomate",
  ],
  sports: [
    "Football",
    "Football américain",
    "Handball",
    "Basketball",
    "Volleyball",
    "Rugby",
    "Baseball",
    "Hockey sur glace",
    "Boxe",
    "Escrime",
    "Judo",
    "Lutte gréco-romaine",
    "Lutte libre",
    "Taekwondo",
    "Karaté",
    "Aïkido",
    "Sumo",
  ],
  pays: [
    "États-Unis",
    "Canada",
    "Singapour",
    "Hong Kong",
    "Japon",
    "Corée du Sud",
    "Israël",
    "Taïwan",
    "Norvège",
    "Suisse",
    "Allemagne",
    "Danemark",
    "Pays-Bas",
    "Irlande",
    "Finlande",
    "Suède",
    "Liechtenstein",
    "Royaume-Uni",
    "Luxembourg",
    "France",
    "Belgique",
    "Autriche",
    "Slovénie",
    "Italie",
    "Espagne",
    "Tchéquie",
    "Grèce",
    "Estonie",
    "Andorre",
    "Chypre",
    "Malte",
    "Slovaquie",
    "Portugal",
    "Australie",
    "Nouvelle-Zélande",
  ],
  couleurs: [
    "Bleu",
    "Noir",
    "Blanc",
    "Rouge",
    "Jaune",
    "Vert",
    "Orange",
    "Marron",
    "Rose",
    "Violet",
  ],
  metiers: [
    "Photographe",
    "Architecte",
    "Cuisinier",
    "Vétérinaire",
    "Médecin",
    "Chirurgien",
    "Décorateur d'intérieur",
    "Concepteur de voyage",
    "Journaliste",
    "Styliste",
    "Fleuriste",
    "Policier",
    "Agent de voyage",
    "Infirmier",
    "Jardinier paysagiste",
    "Professeur",
    "Sage-femme",
    "Avocat",
    "Ostéopathe",
    "Webmaster",
  ],
  prenom: [
    "Jean",
    "Michel",
    "Philippe",
    "Pierre",
    "Alain",
    "Nicolas",
    "Christophe",
    "Patrick",
    "Christian",
    "Daniel",
    "Marie",
    "Nathalie",
    "Isabelle",
    "Sylvie",
    "Catherine",
    "Françoise",
    "Monique",
    "Martine",
    "Christine",
    "Nicole",
  ],
};


// COMPTEUR : 

let compteurPartieGagner = 0;
let compteur             = 0;

let motChoisi       = "";


// afficher le bouton d'options :

const affichageOptions = () => {
    divOptions.innerHTML += `<h3> Choisissez une option : </h3>`;
    let boutonOptions = document.createElement("div");
    for (let value in options) {
        boutonOptions.innerHTML += `<button class="options" onclick="generateurMot('${value}')">${value}</button>`;
    }
    divOptions.appendChild(boutonOptions)  
};


// Générateur de mot :

const generateurMot = (ValeurOption) => {
  let optionsBoutons = document.querySelectorAll(".options");
  optionsBoutons.forEach((button) => {
    if (button.innerText.toLowerCase() === ValeurOption) {
      button.classList.add("active");
    }
    button.disabled = true;
  });
};



// Fonction qui se lance quand l'utilisateur lance la page web ou clique sur le bouton nouvelle partie :

function initialisation() {
  compteurPartieGagner = 0;
  compteur = 0;

  // Pour crée le clavier de l'utilisateur 

  for (let i = 65; i < 91; i++) {
    let bouton = document.createElement("button");
    bouton.classList.add("lettres");
    bouton.innerText = String.fromCharCode(i);
    divLettres.append(bouton);
  }

  affichageOptions();
}


// Nouvelle Partie :

boutonNouvellePartie.addEventListener("click", initialisation);
window.onload = initialisation;
