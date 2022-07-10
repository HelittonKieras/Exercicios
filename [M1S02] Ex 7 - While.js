var contador = 0,
  resposta,
  qttPessoas = 0;

while (contador < 4) { 
  resposta = window.prompt(
    "Qual a sua classificação para a serie stranger things?"
  );
  switch (resposta) { 
    case "ruim": 
      qttPessoas++; 
      break;
    case "bom":
      break;
    case "excelente":
      break;
    default: 
      resposta = window.prompt(
        "Opa opção errada, apenas é permitido bom, ruim e excelente.\n Digite novamente sua avaliação"
      ); 
      if (resposta == "ruim") { 
        qttPessoas++; 
      }
  }
  contador++; 
}

console.log("Quantidade de pessoas que classificou a serie como ruim: ", qttPessoas); 
