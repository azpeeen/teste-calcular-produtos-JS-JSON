const readline = require('readline-sync');


var pedido = {
  "codigoPedido": "P12345",
  "dataPedido": "2024-07-07",
  "codigoCliente": "C6789",
  "itens": [],
  "valorTotal": 0
};


function calcularSubtotal(quantidade, precoUnitario) {
  return quantidade * precoUnitario;
}


console.log("Adicionar itens ao pedido (digite 'F' para finalizar):");

while (true) {
  let codigoProduto = readline.question("Codigo do produto: ");
  if (codigoProduto.toUpperCase() === 'F') {
    break;
  }

  let quantidade = parseInt(readline.question("Quantidade: "));
  let precoUnitario = parseFloat(readline.question("Preco unitario: "));


  let subtotal = calcularSubtotal(quantidade, precoUnitario);


  pedido.itens.push({
    "codigoProduto": codigoProduto,
    "quantidade": quantidade,
    "precoUnitario": precoUnitario,
    "subtotal": subtotal
  });


  pedido.valorTotal += subtotal;

  console.log("Item adicionado ao pedido.");
}


console.log("Pedido completo:");
console.log("Código do pedido:", pedido.codigoPedido);
console.log("Data do pedido:", pedido.dataPedido);
console.log("Código do cliente:", pedido.codigoCliente);

console.log("Itens do pedido:");
pedido.itens.forEach(function(item, index) {
  console.log("Item", index + 1 + ":");
  console.log("  Código do produto:", item.codigoProduto);
  console.log("  Quantidade:", item.quantidade);
  console.log("  Preço unitário:", item.precoUnitario);
  console.log("  Subtotal:", item.subtotal.toFixed(2));
});

console.log("Valor total do pedido:", pedido.valorTotal.toFixed(2));