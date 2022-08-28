// pegar input
// se sim, mostrar categorias disponíveis, pergunta qual categoria quer
// se não, mostrar todos os livros em ordem decrescente

const livros = require("./database");
const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro?S/N\n");

if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponíveis:\n");

  console.log(
    "Produtividade",
    "/História brasileira",
    "/Américas",
    "/Estilo de vida",
    "/Tecnologia"
  );

  const entradaCategoria = readline.question("Qual categoria voce escolhe ?\n");

  const retorno = livros.filter(
    (livro) => livro.categoria === entradaCategoria
  );
  console.table(retorno);
} else {
  console.log("Esses são todos os livros disponíveis:");

  console.table(livros.sort((a, b) => a.paginas - b.paginas));
}
