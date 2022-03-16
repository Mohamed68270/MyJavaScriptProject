window.addEventListener("click", () => {
  let YourAge = prompt("Entrer votre âge : ");
  let HerAge;

  if (YourAge == "" || YourAge == null) {
    HerAge = alert(null);
  } else if (YourAge == 0) {
    HerAge = alert("Tu n'est pas né...");
  } else if (YourAge < 15) {
    alert("Va réviser ton brevet petit...");
  } else {
    HerAge = alert(`L'âge minimum est de : ${YourAge / 2 + 7} ans`);
  }
});
