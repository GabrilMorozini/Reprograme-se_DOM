(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_notebook')) ?? [];
}

function setLocalStorage(bd_notebook) {
  localStorage.setItem('bd_notebook', JSON.stringify(bd_notebook));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() {
  limparTabela();
  const bd_notebook = getLocalStorage();
  let index = 0;
  for (notebook of bd_notebook) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${notebook.marca}</td>
        <td>${notebook.tela}</td>
        <td>${notebook.processador}</td>
        <td>${notebook.armazenamento}</td>
        <td>${notebook.memoriaRAM}</td>
        <td>${notebook.serial}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { 
  const notebook = {
    marca: document.getElementById('marca').value,
    tela: document.getElementById('tela').value,
    processador: document.getElementById('processador').value,
    armazenamento: document.getElementById('armazenamento').value,
    memoriaRAM: document.getElementById('memoriaRAM').value,
    serial: document.getElementById('serial').value
  }
  const bd_notebook = getLocalStorage();
  bd_notebook.push(notebook);
  setLocalStorage(bd_notebook);
  atualizarTabela();
}

function excluir(index) { 
  const bd_notebook = getLocalStorage();
  bd_notebook.splice(index, 1);
  setLocalStorage(bd_notebook);
  atualizarTabela();
}

function validarSerial() { 
  const bd_notebook = getLocalStorage();
  for (notebook of bd_notebook) {
    if (serial.value == notebook.serial) {
      serial.setCustomValidity("Este serial já existe!");
      feedbackSerial.innerText = "Este serial já existe!";
      return false;
    } else {
      serial.setCustomValidity("");
      feedbackSerial.innerText = "Informe o serial corretamente.";
    }
  }
  return true;
}

atualizarTabela();
const serial = document.getElementById("serial");
const feedbackSerial = document.getElementById("feedbackSerial");
serial.addEventListener('input', validarSerial);