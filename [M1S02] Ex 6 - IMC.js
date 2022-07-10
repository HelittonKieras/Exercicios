var peso = parseFloat(prompt("Digite seu peso: ")); 
console.log(peso);
var altura = parseFloat(prompt("Digite sua altura em metros: ")); 

var imc = peso / altura ** 2; 
console.log(imc);

if (imc > 18.5 && imc < 24.99) {
  alert("PARABÉNS!! Você está no peso ideal");
} else if (imc >= 25) {
  alert("Um pouco acima do peso");
} else {
  alert("Você está abaixo do peso, procure um médico");
}