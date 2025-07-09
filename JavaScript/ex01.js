const fs = require("fs"); //Caminho Json
const readline = require("readline");

const tl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function perguntar(pergunta) {
	return new Promise((resolve) => {
		tl.question(pergunta, (resposta) => {
			resolve(resposta);
		});
	});
}
/////////////////////////////////// [TABUADA DO 1 AO 10]
async function numeros() {
	const num = Number(await perguntar("Digite um número para fazer a tabuada: "));

	console.log(`\n=== Tabuada do ${num} ===`);
	for (let i = 1; i <= 10; i++) {
		console.log(`${num} x ${i} = ${num * i}`);
	}

	tl.close();
}

///////////////////////////////////////////////////////////////////////////////////////// [OPERAÇÕES NÚMERICAS]

async function operacoes() {
	const number = Number(await perguntar("Digite um número para realizar as operações: "));
	const number1 = Number(await perguntar("Outro número: "));

	let opcao = Number(await perguntar(
		"Tipos de operações:\n[1] Somar\n[2] Subtração\n[3] Divisão\n[4] Multiplicação\n[5] Todas as operações\n[0] Sair\nEscolha: "
	));

	switch (opcao) {
		case 1:
			console.log(`${number} + ${number1} = ${number + number1}`);
			break;
		case 2:
			console.log(`${number} - ${number1} = ${number - number1}`);
			break;
		case 3:
			if (number1 !== 0) {
				console.log(`${number} / ${number1} = ${number / number1}`);
			} else {
				console.log("Erro: divisão por zero!");
			}
			break;
		case 4:
			console.log(`${number} x ${number1} = ${number * number1}`);
			break;
		case 5:
			console.log("\n=== Todas as operações disponíveis ===");
			console.log(`${number} + ${number1} = ${number + number1}`);
			console.log(`${number} - ${number1} = ${number - number1}`);
			if (number1 !== 0) {
				console.log(`${number} / ${number1} = ${number / number1}`);
			} else {
				console.log("Erro: divisão por zero!");
			}
			console.log(`${number} x ${number1} = ${number * number1}`);
			break;
		case 0:
			console.log("Saindo...");
			break;
		default:
			console.log("Opção inválida. Tente novamente.");
			break;
	}
	tl.close();
}


////////////////////////////////////////////////////////////////////[LISTA DE NOMES]

async function lista_nome(){
	let salvar_nomes = []; //Lista vazia
    for( let i = 0; i< 3; i++){
		const nome = await perguntar(`Informe o ${i + 1}º nome: `);
		salvar_nomes.push(nome);
	}
	const caminhoArquivo = "./nomes.json"; //criar arquivo json
	fs.writeFileSync(caminhoArquivo, JSON.stringify(salvar_nomes, null, 2), "utf-8"); //dizendo o caminho para salvar os dados
	console.log(`\nNomes salvos com sucesso em: ${caminhoArquivo}`); //indicando que foi salvo
	console.log(salvar_nomes);

	 tl.close();
}

