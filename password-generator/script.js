document.addEventListener("DOMContentLoaded", function () {
  const kbl = document.getElementById("kbl");
  const sml = document.getElementById("sml");
  const num = document.getElementById("num");
  const sy = document.getElementById("sy");
  const length = document.getElementById("length");
  const generate = document.getElementById("generate");
  const result = document.getElementById("result");

  generate.addEventListener("click", function () {
    const all = [];
    const syChars = "!@#$%^&*/";
    const smlChars = "abcdefghijklmnopqrstuvwxyz";
    const kblChars = smlChars.toUpperCase();
    const numChars = "1234567890";

    if (sy.checked) all.push(...syChars.split(""));
    if (sml.checked) all.push(...smlChars.split(""));
    if (kbl.checked) all.push(...kblChars.split(""));
    if (num.checked) all.push(...numChars.split(""));

    if (all.length === 0) {
      alert("Please choose at least one option to generate a password.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length.value; i++) {
      generatedPassword += all[Math.floor(Math.random() * all.length)];
    }

    result.value = generatedPassword;
    result.focus();
  });
});
