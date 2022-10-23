'use strict';
/*
input1 = '#ingresos'
input2 = '#gastos'
button = '#calcular'
'#resultado'
*/
let btn = document.querySelector('#calcular');
btn.addEventListener('click', btnAction);

function btnAction() {
    let ingresos = document.querySelector('#ingresos').value,
    gastos = document.querySelector('#gastos').value,
    resultado = document.querySelector('#resultado');
    let isValidData = validatingData(ingresos, gastos);
    // console.log(isValidData );
    if(isValidData){
        let endeudamiento = (+ingresos - +gastos)*0.35;
        resultado.innerText =`Su capacidad de endeudamiento es de \$${endeudamiento}`;
    }else{
        resultado.innerText = 'Asegurate de ingresar solo números.'
    }
}

function validatingData(...theArg) {
    let areAllNumbers = theArg.every(item => +item * 0 === 0 );
    return areAllNumbers;    
}