const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");
const cores = document.forms[1];

function changeText(event) {
  const target = event.target;

  //console.log(target.checkValidity()); //Toda vez que houve mudanças nos inputs, será ativada a função changeText, fazendo a validação se esse target está correto ou não

  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.nextElementSibling.innerText = target.validationMessage;
    //Com esse condicional adicionamos classe invalido e atribuimos ao span após o target a mensagem de validação.
  } else {
    target.classList.remove("invalido");
    target.nextElementSibling.innerText = target.validationMessage;
  }
}

function changeBg(event) {
  document.body.style.backgroundColor = cores.elements[0].value;
}

contato.addEventListener("change", changeText);
cores.addEventListener("change", changeBg);
