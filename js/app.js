import { Cliente, ClienteService } from "./classes";
import { isValidEmail, isNotEmpty, clearInputs, createListItem } from "./utils";

const service = new ClienteService();

const form = document.getElementById("form-cadastro");
const lista = document.getElementById("lista-clientes");

async function renderizarClientes() {
  lista.innerHTML = "";
  const clientes = await service.listar();

  const itens = clientes.map((cliente) => 
  createListItem(cliente, async (id, itemEl) => {
    await service.excluir(id);
    lista.removeChild(itemEl);
  })
 );

 itens.forEach((item) => lista.appendChild(item))
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (!isNotEmpty(nome)) {
    alert("O nome não pode estar vazio.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Email inválido.");
    return;
  }

  const novoCliente = new Cliente(nome, email);
  await service.adicionar(novoCliente);

  clearInputs("nome", "email");
  renderizarClientes();
});

document.addEventListener("DOMContentLoaded", renderizarClientes);