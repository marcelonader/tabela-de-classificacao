var jogador1 = {
	nome: "",
	vitorias: 0,
	derrotas: 0,
	empates: 0,
	pontos: 0	
}

var jogador2 = {
	nome: "",
	vitorias: 0,
	derrotas: 0,
	empates: 0,
	pontos: 0	
}

var jogador3 = {
	nome: "",
	vitorias: 0,
	derrotas: 0,
	empates: 0,
	pontos: 0	
}

var jogador4 = {
	nome: "",
	vitorias: 0,
	derrotas: 0,
	empates: 0,
	pontos: 0	
}

var jogador5 = {
	nome: "",
	vitorias: 0,
	derrotas: 0,
	empates: 0,
	pontos: 0	
}

var listaDeJogadores = [jogador1, jogador2, jogador3, jogador4, jogador5]

function adicionarJogador1(){
	var campoInputJogador1 = document.querySelector('#jogador1')
	jogador1.nome = campoInputJogador1.value;
	exibirJogadoresNaTela(listaDeJogadores)
	campoInputJogador1.value = ""
}

function adicionarJogador2(){
	var campoInputJogador2 = document.querySelector('#jogador2')
	jogador2.nome = campoInputJogador2.value
	exibirJogadoresNaTela(listaDeJogadores)
	campoInputJogador2.value = ""
}

function adicionarJogador3(){
	var campoInputJogador3 = document.querySelector('#jogador3')
	jogador3.nome = campoInputJogador3.value
	exibirJogadoresNaTela(listaDeJogadores)
	campoInputJogador3.value = ""
}

function adicionarJogador4(){
	var campoInputJogador4 = document.querySelector('#jogador4')
	jogador4.nome = campoInputJogador4.value
	exibirJogadoresNaTela(listaDeJogadores)
	campoInputJogador4.value = ""
}

function adicionarJogador5(){
	var campoInputJogador5 = document.querySelector('#jogador5')
	jogador5.nome = campoInputJogador5.value	
	exibirJogadoresNaTela(listaDeJogadores)
	campoInputJogador5.value = ""
}

function exibirJogadoresNaTela(jogadores){
	var html = ""
for(var i = 0; i < listaDeJogadores.length; i++){
	contarPontos(listaDeJogadores[i])	
	html += "<tr><td>" + listaDeJogadores[i].nome + "</td>";
	html += "<td>" + listaDeJogadores[i].vitorias + "</td>";
	html += "<td>" + listaDeJogadores[i].derrotas + "</td>";
	html += "<td>" + listaDeJogadores[i].empates + "</td>";
	html += "<td>" + listaDeJogadores[i].pontos + "</td>";
	html += "<td><button id='vitoria' onclick='adicionarVitoria(" + i + ")'>Adicionar Vitória</button><button id='vitoria' onclick='diminuirVitoria(" + i + ")'>Diminuir Vitórias</button></td>";
	html += "<td><button id='derrota' onclick='adicionarDerrota(" + i + ")'>Adicionar Derrota</button><button id='derrota' onclick='diminuirDerrota(" + i + ")'>Diminuir Derrotas</button></td>";
	html += "<td><button id='empate' onclick='adicionarEmpate(" + i + ")'>Adicionar Empate</button><button id='empate' onclick='diminuirEmpate(" + i + ")'>Diminuir Empates</button></td></tr>";
}
	
	var tabelaDeJogadores = document.getElementById("listaDeJogadores");
	tabelaDeJogadores.innerHTML = html
}


exibirJogadoresNaTela(listaDeJogadores);

function contarPontos(jogador){
	jogador.pontos = (jogador.vitorias * 3) + jogador.empates
	}


function adicionarVitoria(i){
	var jogador = listaDeJogadores[i]
	if(jogador.nome === ""){
		alert("Jogador inexistente")
	} else {
	jogador.vitorias++
	jogador.pontos = contarPontos(jogador)}
exibirJogadoresNaTela(listaDeJogadores)}

function adicionarDerrota(i){
	var jogador = listaDeJogadores[i]
	if(jogador.nome === ""){
		alert("Jogador inexistente")
	} else {
	jogador.derrotas++
	jogador.pontos = contarPontos(jogador)}
	exibirJogadoresNaTela(listaDeJogadores)}

function adicionarEmpate(i){
	var jogador = listaDeJogadores[i]
	if(jogador.nome === ""){
		alert("Jogador inexistente")
	} else {
	jogador.empates++
	jogador.pontos = contarPontos(jogador)}
	exibirJogadoresNaTela(listaDeJogadores)}


function diminuirVitoria(i){
	var jogador = listaDeJogadores[i]
	if(jogador.nome === ""){
		alert("Jogador inexistente")
	} else {
	jogador.vitorias--
	jogador.pontos = contarPontos(jogador)}
	exibirJogadoresNaTela(listaDeJogadores)}

function diminuirDerrota(i){
	var jogador = listaDeJogadores[i]
	if(jogador.nome === ""){
		alert("Jogador inexistente")
	} else {
	jogador.derrotas--
	jogador.pontos = contarPontos(jogador)}
	exibirJogadoresNaTela(listaDeJogadores)}

function diminuirEmpate(i){
	var jogador = listaDeJogadores[i]
	if(jogador.nome === ""){
		alert("Jogador inexistente")
	} else {
	jogador.empates--
	jogador.pontos = contarPontos(jogador)}
		exibirJogadoresNaTela(listaDeJogadores)}
	