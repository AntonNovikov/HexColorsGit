// https://jsprospect.com/

const changeBtn = document.querySelector("button");
changeBtn.addEventListener("click", changeColor);
function changeColor() {
  const hex_numbers = "0123456789ABCDEF";

  let hexcode = "";
  for (let i = 0; i < 6; i++) {
    const random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode += hex_numbers[random_index];
  }
  document.querySelector("#hex-code").textContent = hexcode;
  document.body.style.background = "#"+hexcode;
}
