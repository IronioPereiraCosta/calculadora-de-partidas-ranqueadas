saldoVitorias(65, 10);

function saldoVitorias(vitorias, derrota) {
  let saldo = vitorias - derrota;
  let nivel = "Ferro";
  if (saldo < 10) {
  }

  if (saldo >= 11 && saldo <= 20) {
    nivel = "Bronze";
  }

  if (saldo >= 21 && saldo <= 50) {
    nivel = "Prata";
  }

  if (saldo >= 51 && saldo <= 80) {
    nivel = "Ouro";
  }

  if (saldo >= 81 && saldo <= 90) {
    nivel = "Diamante";
  }

  if (saldo >= 91 && saldo <= 100) {
    nivel = "Lendário";
  }

  if (saldo >= 101) {
    nivel = "Imortal";
  }

  console.log(`O herói tem saldo de ${saldo} e está no nível de ${nivel}`);
}
