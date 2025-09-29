export class Cliente {
  constructor(nome, email, id = null) {
    this.nome = nome;
    this.email = email;
    this.id = id;
  }
}

export class ClienteService {
  constructor() {
    this.apiurl = "https://crudcrud.com/api/6d1535f0393246a19e25b0fdcb19f5b5/clientes";
  }

  async listar() {
    const resposta = await fetch(this.apiurl);
    return resposta.json();
  }

  async adicionar(cliente) {
    const resposta = await fetch(this.apiurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
    });

    return resposta.json();
  }

  async excluir(id) {
    await fetch(`${this.apiurl}/${id}`, {method: "DELETE"});
  }
}