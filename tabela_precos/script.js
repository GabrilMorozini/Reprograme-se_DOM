var elementos = document.getElementsByClassName("produto_preco");

var soma = 0;

for (let i of elementos) {
  soma = soma + parseFloat(i.innerText);
}

document.write("<p> Total: R$ " + soma);