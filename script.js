saldoVitorias(9, "Ferro");
saldoVitorias(15, "Bronze");
saldoVitorias(45, "Prata");
saldoVitorias(78, "Ouro");
saldoVitorias(85, "Diamante");
saldoVitorias(95, "Lendário");
saldoVitorias(101, "Imortal");

function saldoVitorias(saldo, nivel) {
  if (saldo < 10) {
    console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
  }

  if (saldo >= 11 && saldo <= 20) {
    console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
  }

  if (saldo >= 21 && saldo <= 50) {
    console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
  }

  if (saldo >= 51 && saldo <= 80) {
    console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
  }

  if (saldo >= 81 && saldo <= 90) {
    console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
  }

  if (saldo >= 91 && saldo <= 100) {
    console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
  }

  if (saldo >= 101) {
    console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
  }
}
