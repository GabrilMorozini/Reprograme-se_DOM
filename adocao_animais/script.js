var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

var select_animais = document.getElementById("select_animais");
var container = document.getElementById("container");
var p = document.getElementById("nome");

select_animais.addEventListener('input', listarAnimais);
container.addEventListener('mouseover', mostrarNome);
container.addEventListener('mouseout', limparNome);

function listarAnimais() { 
  limparDivContainer();
  if (select_animais.value == "dog") {
    for (i = 0; i < cachorros.length; i++) {
      var src_img_dog = cachorros[i].imagem + ".jpg";
      var id_dog = cachorros[i].nome;
      var img = document.createElement("img");
      img.src = `./img/${src_img_dog}`;
      img.id = id_dog;
      container.appendChild(img);
    }
  }

  else {
    for (i = 0; i < gatos.length; i++) {
      var src_img_cat = gatos[i].imagem + ".jpg";
      var id_cat = gatos[i].nome;
      var img = document.createElement("img");
      img.src = `./img/${src_img_cat}`;
      img.id = id_cat;
      container.appendChild(img);
    }
  }
}

function mostrarNome(e) { 
  p.innerText = e.target.id;
}

function limparNome() {
  p.innerText = "";
}

function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}