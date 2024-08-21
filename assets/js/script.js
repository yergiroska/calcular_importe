function calcular()
{
    let importe = parseFloat(document.getElementById('importe').value);
    let plazos = parseInt(document.getElementById('plazos').value);
    let result = document.getElementById('resultado');
    let error = document.getElementById('error');    

    result.innerHTML = '';
    error.innerHTML = '';

    if (isNaN(importe) || importe < 1000 || importe > 60000) {
        error.innerHTML = 'Introduce un valor valido para el importe.';
        return;
    }

    if (isNaN(plazos) || plazos < 3 || plazos > 36) {
        error.innerHTML = 'Introduce un valor valido para los plazos.';
        return;
    }

    let interes; 
    let x;
    if (plazos <= 6) {
        interes = 0.04;
        x = "4%";
    } else if (plazos <= 12) {
        interes = 0.06;
        x = "6%";
    }else if(plazos <= 24){
        interes = 0.07;
        x = "7%";
    }else {
        interes = 0.12;
        x = "12%";
    }

    let intereses = importe * interes;
    let importeTotal = importe + intereses;
    let cuotaMensual = importeTotal / plazos;

    let resultado = `
                    <p>Importe financiado: ${importe.toFixed(2)} €</p>
                    <p>Interes aplicado: ${(interes * 100).toFixed(2)}%</p>
                    <p>Cuota mensual: ${cuotaMensual.toFixed(2)} €</p>
                    <p>Importe total: ${importeTotal.toFixed(2)} €</p>
                    `;
    
    document.getElementById('resultado').innerHTML = resultado;
}
