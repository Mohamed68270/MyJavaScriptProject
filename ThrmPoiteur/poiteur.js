const btn = document.getElementById("btn");
const age = document.getElementById("age");
const result = document.getElementById("minim");

btn.addEventListener("click", () => {
  checkAge();
});

function checkAge() {
  let yourAge = age.value;
  let herAge;

  if (yourAge == null || yourAge == 0 || yourAge < 15) {
    return false;
  }

  if (yourAge > 22) {
    herAge =
      `The minimun age for you is ${yourAge / 2 + 7} years old\n` +
      "She's of age now don't worry !";
  } else {
    herAge = `The minimun age for you is ${yourAge / 2 + 7} years old`;
  }

  result.innerText = herAge;
}
