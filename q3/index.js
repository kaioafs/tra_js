let empregado = [1, 2, 3, 4]
let anoNasc = 1992;
let anoAtual = 2022;
let idade = anoAtual - anoNasc;
let tempTrabalho = idade - 24;
if(idade >=30 && tempTrabalho >= 24){
    document.write("<br>Empregado: "+ empregado[3] + "<br>Idade: " + idade + " anos. <br> Entrou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
    

}else if (idade >= 30 || tempTrabalho >= 24){
    document.write("<br>Empregado: "+ empregado[2] + "<br>Idade: " + idade + " anos. <br> Entrou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
}

else {
    document.write("<br>Empregado: "+ empregado[1] + "<br>Idade:"  + idade + " anos. <br> Entrou na empresa á: " + tempTrabalho + " anos <br>Não requer aposentadoria")
}