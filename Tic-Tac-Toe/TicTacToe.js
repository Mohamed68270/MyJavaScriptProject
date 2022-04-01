// Récupérer les éléments du DOM

const cases = [...document.getElementsByClassName("case")];
const joueur = document.getElementById("joueur");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const scoreNull = document.getElementById("scoreNull");

let state = {
  joueurEnCours: 1,
  scoreJ1: 0,
  scoreJ2: 0,
  matchNuls: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};

function resetSate() {
  joueurEnCours = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
}

function checkVictory() {
  if (
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
  ) {
    console.log("winner !");
    return true;
  } else if (
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
}

function jouerCase(e) {
  let idCase = e.target.id;
  if (state[idCase] !== 0) return;

  state[idCase] = state.joueurEnCours;

  let isVictoiry = checkVictory();

  if (isVictoiry === true) {
    alert(`Le gagnant est le joueur ${state.joueurEnCours}`);
    if (state.joueurEnCours === 1) {
      state.scoreJ1++;
      score1.textContent = state.scoreJ1;
    } else {
      state.scoreJ2++;
      score2.textContent = state.scoreJ2;
    }

    resetSate();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoiry === null) {
    alert("Match null");
    state.matchNuls++;
    scoreNull.textContent = state.matchNuls;
    joueur.textContent = "1";
    resetSate();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoiry === false) {
    if (state.joueurEnCours === 1) {
      e.target.textContent = "X";
      state.joueurEnCours = 2;
      joueur.textContent = "2";
    } else {
      e.target.textContent = "O";
      state.joueurEnCours = 1;
      joueur.textContent = "1";
    }
  }
}

cases.forEach((el) => {
  el.addEventListener("click", jouerCase);
});
