function calcIMC() {
  var textPeso = document.getElementById('peso').value;
  var textAltura = document.getElementById('altura').value;
  var textResultado = document.getElementById('resultado');

  var calculo = Math.round((textPeso / (textAltura * textAltura)) * 100) / 100;
  console.log(calculo);
  textResultado.value = calculo;

  if (calculo < 18.5) {
    document.getElementById('indicativoIMC').textContent =
      'Classificação: MAGREZA';
  } else if (calculo >= 18.5 && calculo < 24.9) {
    document.getElementById('indicativoIMC').textContent =
      'Classificação: NORMAL';
  } else if (calculo >= 25 && calculo < 29.9) {
    document.getElementById('indicativoIMC').textContent =
      'Classificação: SOBREPESO - Grau I';
  } else if (calculo >= 30 && calculo < 39.9) {
    document.getElementById('indicativoIMC').textContent =
      'Classificação: OBESIDADE - Grau II';
  } else calculo > 40;
  document.getElementById('indicativoIMC').textContent =
    'Classificação: OBESIDADE GRAVE - Grau III';
}
