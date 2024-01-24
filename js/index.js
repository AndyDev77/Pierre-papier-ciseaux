const contentChoiceComputer = document.getElementById("choice-computer");
const contentChoiceUser = document.getElementById("choice-user");
const contentResult = document.getElementById("result");

const choicePossibles = document.querySelectorAll("button");
let choiceUser;
let result;
let choiceComputer;

// Events click

choicePossibles.forEach((choicePossibles) =>
  choicePossibles.addEventListener("click", (e) => {
    // recovery the id for the button clicked
    choiceUser = e.target.id;

    // On ajoute l'image qui correspond au choix
    contentChoiceUser.innerHTML = `<img src="./images/${choiceUser}.png" alt="${choiceUser}">`;
    generer_choice_computer();
    verification();
  })
);

const generer_choice_computer = () => {
  // Génère un nombre compris entre 1 et 3
  random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    choiceComputer = "rock";
  }
  if (random === 2) {
    choiceComputer = "paper";
  }
  if (random === 3) {
    choiceComputer = "scissors";
  }

  contentChoiceComputer.innerHTML = `<img src="./images/${choiceComputer}.png" alt="${choiceUser}">`;
};

// fonction pour vérifier si le joueur à gagné ou pas

const verification = () => {
  if (choiceUser == choiceComputer) {
    result = "Egalité";
  }

  // Cas où le joueur perd

  if (choiceUser == "rock" && choiceComputer == "paper") {
    result = "Perdu !";
  }

  if (choiceUser == "paper" && choiceComputer == "scissors") {
    result = "Perdu !";
  }

  if (choiceUser == "scissors" && choiceComputer == "rock") {
    result = "Perdu !";
  }

  // Cas où le joueur gagne

  if (choiceUser == "paper" && choiceComputer == "rock") {
    result = "Gagné !";
  }

  if (choiceUser == "scissors" && choiceComputer == "paper") {
    result = "Gagné  !";
  }

  if (choiceUser == "rock" && choiceComputer == "scissors") {
    result = "Gagné  !";
  }

  contentResult.innerHTML = result;
};
