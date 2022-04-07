let codigo =10;


    if (codigo == 1) {
       document.write("<br>Código selecionado: " + codigo + "<br>Salgado ")
   } else if (codigo >= 2 && codigo <= 4) {
       document.write("<br>Código selecionado: " + codigo + "<br>Bolacha")
   } else if (codigo >= 5 && codigo <= 6) {
       document.write("<br>Código selecionado: " + codigo + "<br>Recheado De Morango")
   } else if (codigo == 7) {
       document.write("<br>Código selecionado: " + codigo + "<br>feijão")
   } else if (codigo >= 8 && codigo <= 15) {
       document.write("<br>Código selecionado: " + codigo + "arroz")
   } else {
       document.write("Código Inválido")

   }