let notsB = [8.0, 7.0, 9.0, 10.0];
let notsF = (notsB[0] + notsB[1] + notsB[2] + notsB[3]) / 4;

if (notsF >= 9.0) {
    document.write("O aluno foi aprovado com nota: " + notsF)
} else if (notsF >= 7.5  &&notsF < 9.0) {
    document.write("O aluno foi aprovado com nota: " + notsF)
} else if (notsF >= 6.0 && notsF < 7.5) {
    document.write("O aluno está de recuperção com nota: " + notsF)
} else if (notsF < 6.0 && notsF >= 0.0) {
    document.write("O aluno foi reprovado com média:<br> " + notsF)
}