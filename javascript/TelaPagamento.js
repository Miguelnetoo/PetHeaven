function mostrarInputs() {
    document.getElementById('mensagem').innerText = 'Você escolheu a Opção 1.';
    document.getElementById('inputs').style.display = 'block';
  }

  function escolherOpcao(opcao) {
    document.getElementById('mensagem').innerText = 'Você escolheu a Opção ' + opcao + '.';
    document.getElementById('inputs').style.display = 'none';
  }