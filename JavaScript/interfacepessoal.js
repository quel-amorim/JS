const readline = require("readline");

// Criação da interface
const ilt = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Função para perguntar
function perguntar(pergunta) {
	return new Promise((resolve) => {
		ilt.question(pergunta, (resposta) => {
			resolve(resposta);
		});
	});
}

async function informacoes() {
	let nome = await perguntar("Informe qual é o seu nome completo: ");
	let idade = Number(await perguntar("Informe sua idade: "));
	let agora = new Date();
	let ano_nascimento = agora.getFullYear() - idade;

	console.log(`\nNome: ${nome}`);
	console.log(`Idade: ${idade}`);
	console.log(`Ano de Nascimento (estimado): ${ano_nascimento}`);

	if (idade >= 18) {
		console.log("Situação: Adulto");
	} else {
		console.log("Situação: Menor de idade!");
	}

	ilt.close();
}

informacoes();
