const img = document.querySelector("#imagem");
const verde = document.getElementById("verde");
const amarelo = document.getElementById("amarelo");
const vermelho = document.getElementById("vermelho");
const automatico = document.getElementById("automatico");
let index = 0;
let auto = null;

function verdeOn() {
  img.src = "verde.png";
}
function amareloOn() {
  img.src = "amarelo.png";
}
function vermelhoOn() {
  img.src = "vermelho.png";
}
function nextIndex() {
  index = index < 2 ? ++index : 0;
}

function atlCor() {
  const cores = [verdeOn, amareloOn, vermelhoOn];
  const cor = cores[index];
  cor();
  nextIndex();
}
function automaticoOn() {
  auto = setInterval(atlCor, 1000);
}
function stopS() {
  clearInterval(auto);
}

verde.addEventListener("click", stopS);
verde.addEventListener("click", verdeOn);
amarelo.addEventListener("click", stopS);
amarelo.addEventListener("click", amareloOn);
vermelho.addEventListener("click", stopS);
vermelho.addEventListener("click", vermelhoOn);
automatico.addEventListener("click", stopS);
automatico.addEventListener("click", automaticoOn);

