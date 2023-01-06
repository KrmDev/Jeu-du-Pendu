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
    "Clementine",
    "Fraise",
    "Framboise",
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
    "Handball",
    "Basketball",
    "Volleyball",
    "Rugby",
    "Baseball",
    "Boxe",
    "Escrime",
    "Judo",
    "Taekwondo",
    "Karate",
    "Aïkido",
    "Sumo",
  ],
  pays: [
    "Canada",
    "Singapour",
    "Japon",
    "Israël",
    "Taïwan",
    "Norvège",
    "Suisse",
    "Allemagne",
    "Danemark",
    "Irlande",
    "Finlande",
    "Suède",
    "Liechtenstein",
    "Luxembourg",
    "France",
    "Belgique",
    "Autriche",
    "Slovenie",
    "Italie",
    "Espagne",
    "Tchequie",
    "Grèce",
    "Estonie",
    "Andorre",
    "Chypre",
    "Malte",
    "Slovaquie",
    "Portugal",
    "Australie",
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
    "Veterinaire",
    "Medecin",
    "Chirurgien",
    "Journaliste",
    "Styliste",
    "Fleuriste",
    "Policier",
    "Infirmier",
    "Professeur",
    "Sage-femme",
    "Avocat",
    "Osteopathe",
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
let compteur = 0;

let motChoisi = "";

// afficher le bouton d'options :

const affichageOptions = () => {
  divOptions.innerHTML += `<h3> Choisissez une option : </h3>`;
  let boutonOptions = document.createElement("div");
  for (let value in options) {
    boutonOptions.innerHTML += `<button class="options" onclick="generateurMot('${value}')">${value}</button>`;
  }
  divOptions.appendChild(boutonOptions);
};

// Bloquer tous les boutons du clavier :

const bloqueur = () => {
  let optionsBoutons = document.querySelectorAll(".options");
  let ToucheClavier = document.querySelectorAll(".lettres");

  optionsBoutons.forEach((button) => {
    button.disabled = true;
  });

  ToucheClavier.forEach((button) => {
    button.disabled.true;
  });
  SectionNouvellePartie.classList.remove("cacher");
};

// Generateur de mot :

const generateurMot = (ValeurOption) => {
  let optionsBoutons = document.querySelectorAll(".options");
  optionsBoutons.forEach((button) => {
    if (button.innerText.toLowerCase() === ValeurOption) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  divLettres.classList.remove("cacher");
  inputUtilisateur.innerText = "";

  let optionsTableaux = options[ValeurOption];

  // Pour Choisir un mot aleatoire :

  motChoisi =
  optionsTableaux[Math.floor(Math.random() * optionsTableaux.length)];
  motChoisi = motChoisi.toUpperCase();
  console.log(motChoisi);

  let affichageObjet = motChoisi.replace(/./g, '<span class="lignes">_</span>');

  // Afficher chaque element sous forme de span :

  inputUtilisateur.innerHTML = affichageObjet;
};

// Fonction qui se lance quand l'utilisateur lance la page web ou clique sur le bouton nouvelle partie :

function initialisation() {
  compteurPartieGagner = 0;
  compteur = 0;

  // Efface tout le contenu et cache les lettres et le bouton de nouvelle partie :

  inputUtilisateur.innerHTML = "";
  divOptions.innerHTML = "";
  divLettres.classList.add("cacher");
  SectionNouvellePartie.classList.add("cacher");
  divLettres.innerHTML = "";

  // Pour cree le clavier de l'utilisateur

  for (let i = 65; i < 91; i++) {
    let bouton = document.createElement("button");
    bouton.classList.add("lettres");
    bouton.innerText = String.fromCharCode(i);

    bouton.addEventListener("click", () => {
      let tableauxCaractere = motChoisi.split("");
      let lignes = document.getElementsByClassName("lignes");

      // Si l'utilisateur clique sur une lettres qui match avec le motChoisi et la remplace sur la ligne " d'input "

      if (tableauxCaractere.includes(bouton.innerText)) {
        tableauxCaractere.forEach((caractere, index) => {
          if (caractere === bouton.innerText) {
            lignes[index].innerText = caractere;
            compteurPartieGagner += 1;
            if (compteurPartieGagner == tableauxCaractere.length) {
              resultat.innerHTML = `<h2 class='msg-gagnant'>Vous avez Gagné !</h2><p>Le mot était <span>${motChoisi}</span></p>`;
              bloqueur();
            }
          }
        });
      }
      else {
        // Compteur de defaite : 
        compteur += 1;
        // Pour cree le bonhomme : 
        dessinPendu(compteur);
        // Compteur = 6 ( toutes les partie du corps du pendu ) :
        if(compteur == 6 ) {
          resultat.innerHTML = `<h2 class="msg-perdu">Vous avez Perdu !</h2><p>Le mot était <span>${motChoisi}</span></p>`
          bloqueur();
        };
      }
      bouton.disabled = true;
    });
    divLettres.append(bouton);
  }

  affichageOptions();

  let {DessinDeBase} = CreeCanvas();
  DessinDeBase();
};


// Canvas 

const CreeCanvas = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  // Pour dessiner les lignes

  const DessinLignes = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const dessinTete = () => {
    context.beginPath();
    context.arc(70,30,10,0, Math.PI * 2, true);
    context.stroke();
  }

  const dessinCorps = () => {
    DessinLignes(70, 40, 70, 80);
  };
  const dessinBrasGauche = () => {
    DessinLignes(70, 50, 50, 70);
  };
  const dessinBrasDroite = () => {
    DessinLignes(70, 50, 90, 70);
  };
  const dessinJambeGauche = () => {
    DessinLignes(70, 80, 50, 110);
  };
  const dessinJambeDroite = () => {
    DessinLignes(70, 80, 90, 110);
  };

  const DessinDeBase = () => {
    context.clearRect(0,0, context.canvas.width,context.canvas.height);
    // Ligne du bas :
    DessinLignes(10,130,130,130);
    // Ligne de Gauche : 
    DessinLignes(10,10,10,131);
    // Ligne du haut :
    DessinLignes(10,10,70,10);
    // 2ème Ligne du bas : 
    DessinLignes(70,10,70,20);
  };

  return {DessinDeBase,dessinTete,dessinCorps,dessinBrasGauche,dessinBrasDroite,dessinJambeGauche,dessinJambeDroite};
};

// Dessin du Pendu :

const dessinPendu = (compteur) => {
  let {dessinTete,dessinCorps,dessinBrasGauche,dessinBrasDroite,dessinJambeGauche,dessinJambeDroite} = CreeCanvas();
  switch(compteur) {
    case 1:
      dessinTete();
      break;
    case 2:
      dessinCorps();
      break;
    case 3:
      dessinBrasGauche();
      break;
    case 4:
      dessinBrasDroite();
      break;
    case 5:
      dessinJambeGauche();
      break;
    case 6:
      dessinJambeDroite();
      break;
      default:
  };
};

// Nouvelle Partie :

boutonNouvellePartie.addEventListener("click", initialisation);
window.onload = initialisation;
