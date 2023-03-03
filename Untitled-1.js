// Prefixar cada nome com Sr.

const nomes = ['Joao', 'Miguel'];

const prefixados = nomes.map((_, idx) => `Sr. ${nomes[idx]}`)


// Qual é o valor do maior preço?
const produtos = [
    { nome: 'Celular', valor: 1000 },
    { nome: 'Tv', valor: 2000 }
]

const soPrecos = produtos.map(produto => produto.valor);

const maiorPreço = soPrecos.reduce((acc, cur) => acc > cur ? acc : cur, 0);

// Qual é o nome do produto que tem o maior preço?

const produtoMaisCaro = produtos.reduce((acc, cur) => acc.valor > cur.valor ? acc : cur, {});

// Outra forma

const produtoMaisCaro2 = produtos.sort((a, b,) => b.valor - a.valor)[0];
produtoMaisCaro2.nome;