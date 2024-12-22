let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let saveCount = count + " - ";
  saveEL.textContent += saveCount;
  console.log(count);
  count = 0;
  countEl.textContent = count;
}
