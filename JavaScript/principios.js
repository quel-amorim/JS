const fs = require("fs");
const readline = require("readline");

const terminal = readline.createInterface({
	input: process.stdin ,
	output : process.stdout
});

function perguntar (pergunta){
	return new Promise ((resolve) =>{
		terminal.question(pergunta , (resposta) =>{
			resolve(resposta);
		});
	});
}

async function questao(){
	const NumQuestoes = 20
	const notaMin = 0.7
	const semestre = Number(await perguntar("Que semestres está atualmente ?"));
	const qtdesemestre = 4 //para passar para proxima etapa tem que tar pelo menos 3 ou a mais

	const acertos = Number(await perguntar("Quantas questões acertou : "));

	let nota = acertos / NumQuestoes 

	console.log(nota);

	if(nota >=notaMin && (semestre >=qtdesemestre)){
		console.log("Aprovado");
	}else{
		console.log("Reprovado");
	}
	terminal.close();
}

//////////////////////////////////////////

async function estagio() {
	const opcao = Number(await perguntar("Deseja cadastrar quantos participantes? "));
	const caminhoArquivo = "./participantes.json";

	let candidaturas = [];

	// Verifica se o arquivo já existe e carrega os dados antigos
	if (fs.existsSync(caminhoArquivo)) {
		const dadosExistentes = fs.readFileSync(caminhoArquivo, "utf-8");
		try {
			candidaturas = JSON.parse(dadosExistentes);
		} catch (err) {
			console.error("Erro ao ler JSON existente:", err);
			candidaturas = [];
		}
	}

	for (let i = 1; i <= opcao; i++) {
		console.log(`\nParticipante ${i}:`);
		const nome = await perguntar("Informe seu nome: ");
		const semestre = Number(await perguntar("Qual semestre você está? "));

		const participante = { nome, semestre };
		candidaturas.push(participante);
	}

	// Salva todos os dados no arquivo uma única vez
	fs.writeFileSync(caminhoArquivo, JSON.stringify(candidaturas, null, 2), "utf-8");

	console.log(`\nTodos os participantes foram salvos em: ${caminhoArquivo}`);
	console.log(candidaturas);

	terminal.close();
}
estagio();