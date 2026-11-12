// 1
const idadeUsuario = +prompt('Digite sua idade:');

if (idadeUsuario >= 18)
{
    console.log('Acesso liberado! Divirta-se.');
}
if (idadeUsuario < 18)
{
    console.log('Acesso negado. Você é menor de idade.');
}


console.log('==============================================');


// 2
const senhaCorreta = 'front123';
const senhaDigitada = prompt('Digite a senha de acesso:');

if (senhaDigitada === senhaDigitada)
{
    console.log('Login efetuado com sucesso!');
}
if (senhaDigitada !== senhaCorreta)
{
    console.log('Senha incorreta. Tente novamente.');
}


console.log('==============================================');


// 3
let valorCompra = +prompt('Digite o valor da compra:');

if (valorCompra > 100)
{
    valorCompra = valorCompra - 10;
}

console.log('O total a pagar é:', valorCompra);


console.log('==============================================');


// 4
const numProducts = +prompt('Digite quantos produtos você comprou;')
const numValue = +prompt('Digite quanto você gastou no total:')
let points = 10

if (numProducts >= 5)
{
    points = points + 50;
}
if (numValue >= 200)
{
    points = points + 150;
}

console.log(`Você acumulou ${points} pontos com suas compras. Parabéns!`);


console.log('==============================================');


// 5
let salarioBase = +prompt('Digite o seu salário:');
const totalVendas = +prompt('Digite quanto você ganhou em vendas:');
const notaAvaliacao = +prompt('De 0 a 10, digite qual foi sua nota:');

if (totalVendas > 5000 && notaAvaliacao >= 8)
{
    salarioBase += salarioBase * 0.15;
}

console.log(`Você vai receber ${salarioBase} reais pelo seu desempenho.`);


console.log('==============================================');


// 6
const valorPedido = +prompt('Digite o valor do pedido:');
const distanciaKm = +prompt('Digite quantos km foram rodados apra a entrega:');
let taxas = 10;
let valorTotal;

if (valorPedido < 30 || distanciaKm > 10)
{
    taxas += 5;
}

valorTotal = valorPedido + taxas;

console.log(`O total a pagar é de ${valorTotal} reais.`);