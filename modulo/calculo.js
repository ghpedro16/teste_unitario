/***************************************************************************************************************************************************************
 * Objetivo: arquivo responsavel pela realização de calculos matematicos
 * Data: 24/02/2026
 * Autor: Pedro Henrique
 * Versao: 1.0
 ***************************************************************************************************************************************************************/

const validarDados = function(numero){
    if(numero == '' || isNaN(numero) || numero == null || numero == undefined){
        return false
    }else{
        return true
    }
}

const calcular = function(numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let tipoCalculo = String(operador).toUpperCase()
    let resultado

    if(tipoCalculo == 'SOMAR'){
        resultado = valor1 + valor2
    }else if(tipoCalculo == 'SUBTRAIR'){
        resultado = valor1 - valor2
    }else if(tipoCalculo == 'MULTIPLICAR'){
        resultado = valor1 * valor2
    }else if(tipoCalculo == 'DIVIDIR'){
        resultado = valor1 / valor2
    }else{
        return false
    }

    return Number(resultado.toFixed(1))
}

module.exports = {
    validarDados,
    calcular
}