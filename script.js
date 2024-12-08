// Lógica do formulário para a equação da circunferência
document.getElementById('form-circunferencia').addEventListener('submit', function (e) {
    e.preventDefault();

    // Receber os valores do formulário da circunferência
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const raio = parseFloat(document.getElementById('raio').value);

    // Calcular a equação geral (x² + y² + Dx + Ey + F = 0)
    const D = -2 * x;
    const E = -2 * y;
    const F = x * x + y * y - raio * raio;

    // Calcular a equação reduzida ((x-h)² + (y-k)² = r²)
    const h = x;
    const k = y;

    // Função para formatar o sinal da equação
    function formatarSinal(valor) {
        if (valor < 0) {
            return `- ${Math.abs(valor)}`;
        } else if (valor > 0) {
            return `+ ${valor}`;
        } else {
            return ''; // Não mostrar nada se for 0
        }
    }

    // Função para formatar o valor de x na equação reduzida (garantindo que o sinal de x seja corretamente preservado)
    function formatarValor(valor) {
        if (valor < 0) {
            return `+ ${Math.abs(valor)}`; // Mostrar o sinal de + para valores negativos
        } else if (valor > 0) {
            return `- ${valor}`; // Mostrar o sinal de - para valores positivos
        } else {
            return ''; // Não mostrar nada se for 0
        }
    }

    const resultado = `
<h4>Equação Geral:</h4>
<p>x² + y² ${formatarSinal(D)}x ${formatarSinal(E)}y ${formatarSinal(F)} = 0</p>

<h4>Equação Reduzida:</h4>
<p>(x ${formatarValor(h)})² + (y ${formatarValor(k)})² = ${raio}²</p>
`;

    // Exibir resultado
    document.getElementById('result').innerHTML = resultado;
    document.getElementById('result').style.display = 'block';
});

// Novo código para calcular a posição relativa entre o ponto e a circunferência
document.getElementById('form-ponto').addEventListener('submit', function (e) {
    e.preventDefault();

    // Receber os valores do formulário do ponto
    const pontoX = parseFloat(document.getElementById('pontoX').value);
    const pontoY = parseFloat(document.getElementById('pontoY').value);

    // Receber os valores da circunferência
    const centroX = parseFloat(document.getElementById('xCentro').value);  // Pegando o valor do centro X
    const centroY = parseFloat(document.getElementById('yCentro').value);  // Pegando o valor do centro Y
    const raio = parseFloat(document.getElementById('raioPonto').value);  // Pegando o valor do raio

    // Calcular a distância entre o ponto e o centro da circunferência
    const distancia = Math.sqrt(Math.pow(pontoX - centroX, 2) + Math.pow(pontoY - centroY, 2));

    // Determinar a posição relativa
    let resultadoPosicao = "";
    if (distancia < raio) {
        resultadoPosicao = "O ponto está dentro da circunferência.";
    } else if (distancia === raio) {
        resultadoPosicao = "O ponto está sobre a circunferência.";
    } else {
        resultadoPosicao = "O ponto está fora da circunferência.";
    }

    // Exibir resultado
    document.getElementById('resultPonto').innerHTML = `
        <h4>Posição Relativa:</h4>
        <p>${resultadoPosicao}</p>
    `;
    document.getElementById('resultPonto').style.display = 'block';
});

// Lógica para calcular a posição relativa entre a reta e a circunferência
document.getElementById('form-reta-circunferencia').addEventListener('submit', function (e) {
    e.preventDefault();

    // Receber os coeficientes da reta
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Receber os valores da circunferência
    const xCentro = parseFloat(document.getElementById('xCentroReta').value);
    const yCentro = parseFloat(document.getElementById('yCentroReta').value);
    const raio = parseFloat(document.getElementById('raioReta').value);

    // Calcular a distância entre o centro da circunferência e a reta
    const distancia = Math.abs(a * xCentro + b * yCentro + c) / Math.sqrt(a * a + b * b);

    // Determinar a posição relativa
    let resultadoPosicao = "";
    const tolerancia = 0.01; // Tolerância pequena para comparações de ponto flutuante

    if (Math.abs(distancia - raio) < tolerancia) {
        resultadoPosicao = "A reta é tangente à circunferência.";
    } else if (distancia < raio) {
        resultadoPosicao = "A reta é secante à circunferência.";
    } else {
        resultadoPosicao = "A reta é externa à circunferência.";
    }

    // Exibir o resultado
    document.getElementById('resultRetaCircunferencia').innerHTML = `
        <h4>Posição Relativa:</h4>
        <p>${resultadoPosicao}</p>
    `;
    document.getElementById('resultRetaCircunferencia').style.display = 'block';
});
