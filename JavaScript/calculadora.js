const readline = require('readline');

// Criar interface para leitura do terminal
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Função auxiliar para perguntar e retornar Promise
function perguntar(pergunta) {
	return new Promise((resolve) => {
		rl.question(pergunta, (resposta) => {
			resolve(resposta);
		});
	});
}

async function calculadora() {
	const num = Number(await perguntar('Digite um número: '));
	const num1 = Number(await perguntar('Digite outro número: '));

	const operacao = Number(await perguntar('[1] Somar\n[2] Subtrair\n[3] Divisão\n[4] Multiplicação\n[0] Sair\nEscolha: '));

	switch (operacao) {
		case 1:
			console.log(`${num} + ${num1} = ${num + num1}`);
			break;
		case 2:
			console.log(`${num} - ${num1} = ${num - num1}`);
			break;
		case 3:
			if (num1 !== 0) {
				console.log(`${num} / ${num1} = ${num / num1}`);
			} else {
				console.log('Erro: divisão por zero.');
			}
			break;
		case 4:
			console.log(`${num} x ${num1} = ${num * num1}`);
			break;
		case 0:
			console.log('Operação cancelada.');
			break;
		default:
			console.log('Opção inválida.');
	}

	rl.close();
}

calculadora();

