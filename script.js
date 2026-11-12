const { forwardRef } = require("react");

// 1
const idadeUsuario = +prompt('Digite sua idade:');

if (idadeUsuario >= 18)
{
    console.log('Acesso liberado! Divirta-se.');
}
if (idadeUsuario <= 18)
{
    console.log('Acesso negado. Você é menor de idade.');
}


console.log('==============================================');


// 2
const senhaCorreta = front123;
let senhaDigitada = prompt('Digite a senha de acesso:');

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