const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");
const cores = document.forms[1];
const range = document.forms[2].elements[3];
const data = document.forms[2].elements[0];
const checkBox = document.forms[3];
const dados = {}; //usamos o obj vazio para incrementar os dados atraves da função


function changeText(event) {
  const target = event.target;
  dados[event.target.name] = event.target.value;
  console.log(dados);


  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.nextElementSibling.innerText = target.validationMessage;
    //Com esse condicional adicionamos classe invalido e atribuimos ao span após o target a mensagem de validação.
  } else {
    target.classList.remove("invalido");
    //target.nextElementSibling.innerText = target.validationMessage;
  }
}

function changeBg(event) {
  console.log(event.target.value)
  document.body.style.backgroundColor = cores.elements[0].value;
}


function changePrice(event) {
  const targetRange = event.target;
  console.log(event.target.value);
  spanTarget = targetRange.previousElementSibling;
  spanTarget.innerText = `R$ ${event.target.value},00`;
}

function verifyCheck(event) {
  if(event.target.checked) {
    console.log(event.target.value)
  }
}

contato.addEventListener("change", changeText);
cores.addEventListener("change", changeBg);
range.addEventListener("change", changePrice);
checkBox.addEventListener("change", verifyCheck);