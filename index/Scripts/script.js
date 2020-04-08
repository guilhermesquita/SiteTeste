nom = prompt("Qual seu nome?");//variavel do nome
/////// While p/ quando o valor for falso ou null ///////////////////////////////////////////
while(nom == false || nom == null){
    nom = prompt("Esse campo é necessário");
}
/////////Uso do DOM/////////////////////////////////////////
var apre = document.getElementsByTagName("p")[0];
apre.innerText = `Olá ${nom}! Seja Bem-Vindo ao Site Teste`
