export function isValidEmail(email) {
  if (!email) return false;

  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

export function isNotEmpty(value) {
  return value && value.trim().length > 0;
}

export function clearInputs(...ids) {
  ids.forEach( id => {
    const input = document.getElementById(id);
    if (input) input.value = "";
  });
}

export function createListItem(cliente, onDelete) {
const item = document.createElement("li");
item.innerHTML = `
  ${cliente.nome} - ${cliente.email}
  <button>X</button>
`;

const btnExcluir = item.querySelector("button");
btnExcluir.addEventListener("click", () => {
  onDelete(cliente.id, item);
});

return item;
}