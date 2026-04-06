document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formCadastro");

  const nome = document.getElementById("cadastro_nome");
  const email = document.getElementById("cadastro_email");
  const telefone = document.getElementById("cadastro_telefone");
  const senha = document.getElementById("cadastro_senha");
  const confirmarSenha = document.getElementById("cadastro_senha_confirm");

  const tabela = document.getElementById("tabelaUsuarios");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede recarregar a página

    // validação simples
    if (senha.value !== confirmarSenha.value) {
      alert("As senhas não coincidem!");
      return;
    }

    if (nome.value === "" || email.value === "" || telefone.value === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // cria nova linha
    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
      <td>${nome.value}</td>
      <td>${email.value}</td>
      <td>${telefone.value}</td>
      <td>
        <button class="editar">Editar</button>
        <button class="excluir">Excluir</button>
      </td>
    `;

    tabela.appendChild(novaLinha);

    // botão excluir
    novaLinha.querySelector(".excluir").addEventListener("click", function () {
      novaLinha.remove();
    });

    // botão editar (simples)
    novaLinha.querySelector(".editar").addEventListener("click", function () {
      nome.value = novaLinha.children[0].innerText;
      email.value = novaLinha.children[1].innerText;
      telefone.value = novaLinha.children[2].innerText;

      novaLinha.remove();
    });

    // limpa formulário
    form.reset();
  });

});