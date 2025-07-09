const readline = require('readline')

//Criação de interface que pegar o input vai ler os dados do prompt || output vai mostrar no terminal os dados colocados do input  
const inter = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

//Criação da função pergunta 
function perguntar (pergunta){
	return new Promise ((resolve) =>{
		inter.question(pergunta,(resposta) => {
			resolve(resposta);
		});
	});
}
//Criação da função principal saudação ||
async function saudacao (){
	const nome = await perguntar('Qual é o seu nome :');
	const idade = Number(await perguntar('Informe sua idade : '));

	console.log(`Oi ${nome} você diz ter ${idade} anos`)

	inter.close(); // Fechamento da interface de colocação de dados 
}

saudacao(); //Rodar a função para testa


