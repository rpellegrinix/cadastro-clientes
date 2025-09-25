document.getElementById("add").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  const novoCliente = { nome, email };

  fetch("https://crudcrud.com/api/6d1535f0393246a19e25b0fdcb19f5b5/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(novoCliente)
  })
    .then(resposta => resposta.json())
    .then(cliente => {
      const ul = document.getElementById("listaClientes");
      const item = document.createElement("li");
      item.innerHTML = `${cliente.nome} - ${cliente.email} <button>X</button>`;

      const btnExcluir = item.querySelector("button");
      btnExcluir.addEventListener("click", () => {
        fetch(`https://crudcrud.com/api/6d1535f0393246a19e25b0fdcb19f5b5/clientes/${cliente._id}`, {
          method: "DELETE"
        })
          .then(() => ul.removeChild(item));
      });

      ul.appendChild(item);

      // limpar inputs
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
    });
});

window.addEventListener("load", () => {
  const ul = document.getElementById("listaClientes");

  fetch("https://crudcrud.com/api/6d1535f0393246a19e25b0fdcb19f5b5/clientes")
    .then(resposta => resposta.json())
    .then(clientes => {
      clientes.forEach(cliente => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.nome} - ${cliente.email} <button>X</button>`;

        const btnExcluir = item.querySelector("button");
        btnExcluir.addEventListener("click", () => {
          fetch(`https://crudcrud.com/api/6d1535f0393246a19e25b0fdcb19f5b5/clientes/${cliente._id}`, {
            method: "DELETE"
          })
            .then(() => ul.removeChild(item));
        });

        ul.appendChild(item);
      });
    });
});
