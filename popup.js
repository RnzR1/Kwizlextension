document.getElementById("zoekBtn").addEventListener("click", function() {
  const niveau = document.getElementById("niveau").value;
  const leerjaar = document.getElementById("leerjaar").value;
  const hoofdstuk = document.getElementById("hoofdstuk").value;
  const zoekwoord = document.getElementById("zoekwoord").value.toLowerCase();

  // Woordenlijsten met jouw data (Frans -> Nederlands)
  const woordenlijsten = {
    havo: {
      3: {
        1: {
          "regarder": "kijken",
          "rencontrer": "ontmoeten",
          "passer": "doorbrengen",
          "le temps": "de tijd",
          "la récré": "de pauze",
          "oublier": "vergeten",
          "écouter": "luisteren naar",
          "demander": "vragen",
          "les devoirs": "het huiswerk",
          "rentrer": "naar huis gaan",
          "raconter": "vertellen",
          "la semaine": "de week",
          "préparer": "voorbereiden",
          "aimer": "houden van",
          "détester": "een hekel hebben aan",
          "retrouver": "terugvinden, terugzien",
          "arriver": "aankomen",
          "rester": "blijven",
          "la journée": "de dag",
          "chercher": "zoeken",
          "donner": "geven",
          "la cantine": "de kantine",
          "entrer": "naar binnen gaan",
          "le surveillant": "de toezichthouder",
          "la surveillante": "de toezichthoudster",
          "commencer": "beginnen",
          "changer": "veranderen",
          "travailler": "werken",
          "adorer": "dol zijn op",
          "donner sur": "uitkijken op",
          "le matin": "'s ochtends",
          "l'après-midi": "'s middags",
          "le soir": "'s avonds",
          "minuit": "middernacht",
          "midi": "12 uur 's middags",
          "le printemps": "de lente",
          "l'été": "de zomer",
          "l'automne": "de herfst",
          "l'hiver": "de winter",
          "le visiteur": "de bezoeker",
          "le concours": "de wedstrijd",
          "le cerveau": "de hersenen",
          "en moyenne": "gemiddeld",
          "admirer": "bewonderen",
          "prouver": "bewijzen",
          "compter": "(mee)tellen",
          "fêter": "vieren",
          "l'or": "het goud",
          "l'argent": "het geld, het zilver",
          "le prix": "de prijs",
          "le parfum": "de smaak",
          "par an": "per jaar",
          "cent": "honderd",
          "mille": "duizend",
          "un million": "een miljoen",
          "impossible": "onmogelijk",
          "pauvre": "arm",
          "cher/chère": "duur",
          "américain(e)": "Amerikaans",
          "mieux": "beter",
          "vendre": "verkopen",
          "exister": "bestaan",
          "savoir": "weten",
          // Nieuwe woorden toegevoegd
          "la meilleure amie": "de beste vriendin",
          "marrant(e)": "grappig",
          "intelligent(e)": "slim",
          "méchant(e)": "gemeen",
          "égoïste": "egoïstisch",
          "timide": "verlegen",
          "paresseux(-euse)": "lui",
          "souvent": "vaak",
          "une fois par semaine": "een keer per week",
          "je la connais": "ik ken haar",
          "au club de sport": "op de sportclub",
          "à l’école": "op school",
          "au travail": "op het werk",
          "chez des amis": "bij vrienden",
          "faire du sport": "sporten",
          "regarder la télé": "televisie kijken",
          "jouer de la guitare": "gitaar spelen",
          "bavarder": "kletsen"
        }
      },
      2: {
        // Voeg woordenlijsten voor andere hoofdstukken en leerjaren toe
      }
    },
      vwo: {
        3: {
          1: {
            // Woordenlijst voor vwo 3, hoofdstuk 1
            "je suis": "ik volg",
            "j’envoie": "ik stuur",
            "créer": "(aan)maken",
            "le compte": "het account",
            "utiliser": "gebruiken",
            "ajouter": "toevoegen",
            "laisser": "achterlaten",
            "le commentaire": "het bericht",
            "télécharger": "downloaden",
            "l’appli(cation)": "de app(licatie)",
            "le message": "het bericht",
            "les gens": "de mensen",
            "les potes": "de maten",
            "célèbre": "beroemd",
            "numérique": "digitaal",
            "branché(e)": "hip, in de mode",
            "démodé(e)": "ouderwets",
            "c’est-à-dire": "dat wil zeggen",
            "ça te dit?": "heb je daar zin in?",
            "il existe": "er bestaat/bestaan",
            "je deviens": "ik word",
            "je viens de": "ik heb zojuist",
            "fais voir!": "laat zien!",
            "avant": "vroeger",
            "presque": "bijna",
            "tout le temps": "de hele tijd",
            "souvent": "vaak",
            "malheureusement": "jammer genoeg",
            "c’est dommage": "dat is jammer",
            "ce n’est pas grave": "het is niet erg",
            "la publicité": "de reclame",
            "l'entreprise v": "de onderneming",
            "le métier": "het beroep",
            "le salaire": "het salaris",
            "plus de": "meer dan",
            "environ": "ongeveer",
            "depuis": "sinds",
            "vrai": "echt, waar",
            "arrêter": "stoppen",
            "hésiter": "twijfelen",
            "montrer": "laten zien",
            "décider": "besluiten",
            "travailler": "werken",
            "participer à": "meedoen aan",
            "il faut": "je moet",
            "le choix": "de keuze",
            "la meilleure amie": "de beste vriendin",
            "l'amitié v": "de vriendschap",
            "je la connais": "ik ken haar",
            "rencontrer": "ontmoeten",
            "ensemble": "samen",
            "marrant(e)": "grappig",
            "intelligent(e)": "intelligent",
            "sociable": "sociaal",
            "optimiste": "optimistisch",
            "faire du shopping": "shoppen",
            "regarder la télé": "tv kijken",
            "faire du sport": "sporten",
            "écouter de la musique": "muziek luisteren",
            "bavarder": "kletsen",
            "à l'école v": "op school",
            "dans mon quartier": "in mijn wijk",
            "chez des amis": "bij vrienden",
            "au club de sport": "op de sportclub"
          },
          2: {
            // Woordenlijst voor vwo 3, hoofdstuk 2 (nieuwe woorden uit afbeelding)
            "le journal": "de krant",
            "le sujet": "het onderwerp",
            "réfléchir": "nadenken",
            "raconter": "vertellen",
            "j’avais": "ik had",
            "je voulais": "ik wilde",
            "je dois": "ik moet",
            "comme tu veux": "zoals je wilt",
            "le lendemain": "de volgende dag",
            "je me lève": "ik sta op",
            "en retard": "te laat",
            "plus tard": "later",
            "tôt": "vroeg",
            "les horaires m mv": "de tijden",
            "au lieu de": "in plaats van",
            "faire la grasse matinée": "uitslapen",
            "se relaxer": "zich ontspannen",
            "dessiner": "tekenen",
            "lire": "lezen",
            "faire du théâtre": "toneelspelen",
            "jouer de la guitare": "gitaar spelen",
            "jouer à la console": "gamen",
            "faire des photos": "foto’s maken",
            "bête": "dom",
            "embêtant(e)": "vervelend",
            "j’ai horreur de": "ik vind ... verschrikkelijk",
            "je me suis trompé(e)": "ik heb me vergist",
            "oublier": "vergeten",
            "avoir envie de": "zin hebben in",
            "venir chez moi": "bij mij komen",
            "relaxant(e)": "ontspannend",
            "passionnant(e)": "boeiend",
            "amusant(e)": "leuk",
            "ça me plaît": "dat bevalt me",
            "ça me rend fou": "dat maakt me gek",
            "énervant(e)": "irritant",
            "nul(le)": "waardeloos",
            "affreux/-se": "afgrijselijk",
            "au nord": "in het noorden",
            "à l’est": "in het oosten",
            "au sud": "in het zuiden",
            "à l’ouest": "in het westen",
            "lourd(e)": "zwaar",
            "léger/-ère": "licht (van gewicht)",
            "pauvre": "arm",
            "riche": "rijk",
            "froid": "koud",
            "chaud": "warm",
            "au printemps": "in de lente",
            "en été": "in de zomer",
            "en automne": "in de herfst",
            "en hiver": "in de winter",
            "il pèse": "hij weegt",
            "la différence": "het verschil",
            "timide": "verlegen",
            "l’enfant m": "het kind",
            "l’adulte m": "de volwassene",
            "l’arbitre m": "de scheidsrechter",
            "la source": "de bron",
            "le concours": "de wedstrijd",
            "accrocher": "(iets) ophangen",
            "il est assis": "hij zit",
            "s’asseoir": "zitten",
            "être prêt(e) à": "bereid zijn om te",
            "chercher (quelqu’un)": "(iemand) ophalen"
          }
        }
      }
    };
    

  // Functie om de woordenlijst om te keren (Nederlands -> Frans)
  function omgekeerdeWoordenlijst(woordenlijst) {
    const omgekeerd = {};
    for (const frans in woordenlijst) {
      const nederlands = woordenlijst[frans].toLowerCase();
      omgekeerd[nederlands] = frans;
    }
    return omgekeerd;
  }

  let resultatenDiv = document.getElementById("resultaten");
  resultatenDiv.innerHTML = ""; // Maak eerdere resultaten leeg

  // Zoek het juiste woordenboek voor het gekozen niveau, leerjaar en hoofdstuk
  let woorden = woordenlijsten[niveau][leerjaar][hoofdstuk];

  // Creëer de omgekeerde woordenlijst
  let omgekeerdeWoorden = omgekeerdeWoordenlijst(woorden); 

  // Controleer of het zoekwoord in de Franse of Nederlandse lijst zit
  if (zoekwoord in woorden) {
    // Frans naar Nederlands vertaling
    resultatenDiv.innerHTML = `<p><strong>${zoekwoord}</strong>: ${woorden[zoekwoord]}</p>`;
  } else if (zoekwoord in omgekeerdeWoorden) {
    // Nederlands naar Frans vertaling
    resultatenDiv.innerHTML = `<p><strong>${zoekwoord}</strong>: ${omgekeerdeWoorden[zoekwoord]}</p>`;
  } else {
    // Als het woord niet gevonden is
    resultatenDiv.innerHTML = "<p>Woord niet gevonden</p>";
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById('lightMode').addEventListener('click', toggleDarkMode);
document.getElementById('darkMode').addEventListener('click', toggleDarkMode);
