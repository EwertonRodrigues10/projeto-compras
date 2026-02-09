const inProduto = document.getElementById("inProduto");
const outResp = document.getElementById("outResp");

function incluirProduto() {
  let produto = inProduto.value;

  if (produto.trim() == "") {
    alert("Informe o nome do produto...");
    inProduto.focus();
    return;
  }

  if (localStorage.getItem("comprasProduto")) {
    let produtos = localStorage.getItem("comprasProduto").split(";");

    produtos.push(produto);

    produtos.sort();

    localStorage.setItem("comprasProduto", produtos.join(";"));
  } else {
    localStorage.setItem("comprasProduto", produto);
  }

  listarProdutos();

  inProduto.value = "";
  inProduto.focus();
}

const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", incluirProduto);

function listarProdutos() {
  const outResp = document.getElementById("outResp");

  if (!localStorage.getItem("comprasProduto")) {
    outResp.textContent = "";
    return;
  }

  let produtos = localStorage.getItem("comprasProduto").split(";");

  let lista = "Produtos Adicionados : \n\n";

  lista += produtos.join("\n");

  outResp.textContent = lista;
}

window.addEventListener("load", listarProdutos);

function limparLista() {
  if (localStorage.getItem("comprasProduto")) {
    if (confirm("Deseja realmente excluir todos os itens da lista?")) {
      localStorage.removeItem("comprasProduto");
      listarProdutos();
    }
  } else {
    alert("Lista está vazia...");
  }
  inProduto.focus();
}
const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);
