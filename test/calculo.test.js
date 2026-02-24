/**************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pelo teste unitario (unit test) do arquivo de Calculo Matematico. Aqui iremos validar todas as funções criadas no arquivo.
 * Data: 24/02/2026
 * Autor Dev: Pedro Henrique
 * Autor Test: Pedro Henrique
 * Versão: 1.0
 **************************************************************************************************************************************************************/

//Import do arquivo de calculo para teste
const calculosMatematicos = require('../modulo/calculo.js')

//CENARIO 01 - Teste de validacao de dados
test("Validação das entradas de dados para um número", function(){

    expect(calculosMatematicos.validarDados(null)).toBe(false)
    expect(calculosMatematicos.validarDados(undefined)).toBe(false)
    expect(calculosMatematicos.validarDados('a')).toBe(false)
    expect(calculosMatematicos.validarDados('2a')).toBe(false)
    expect(calculosMatematicos.validarDados('4,5')).toBe(false)
    expect(calculosMatematicos.validarDados(5)).toBe(true)
    expect(calculosMatematicos.validarDados(5.6)).toBe(true)
    expect(calculosMatematicos.validarDados('5')).toBe(true)
    expect(calculosMatematicos.validarDados('5.6')).toBe(true)

})

//CENARIO 02 - Teste de validação para somar dois números
test("Validação de somar dois numeros", function(){

    expect(calculosMatematicos.calcular(10, 30, 'somar')).toBe(40)
    expect(calculosMatematicos.calcular('10', '30', 'somar')).toBe(40)
    expect(calculosMatematicos.calcular(5.6, 4.2, 'somar')).toBe(9.8)
    expect(calculosMatematicos.calcular(10, 30, 'soma')).toBe(false)
    expect(calculosMatematicos.calcular(10, 30, 'SomAR')).toBe(40)

})

//CENARIO 03 - Teste de validação para subtrair dois números
test("Validação de subtrair dois numeros", function(){

    expect(calculosMatematicos.calcular(10, 30, 'subtrair')).toBe(-20)
    expect(calculosMatematicos.calcular('40', '30', 'subtrair')).toBe(10)
    expect(calculosMatematicos.calcular(5.6, 4.2, 'subtrair')).toBe(1.4)
    expect(calculosMatematicos.calcular(10, 30, 'subtrai')).toBe(false)
    expect(calculosMatematicos.calcular(10, 30, 'SubTRaiR')).toBe(-20)

})

//CENARIO 04 - Teste de validação para multiplicar dois números
test("Validação de multiplicar dois numeros", function(){

    expect(calculosMatematicos.calcular(10, 30, 'multiplicar')).toBe(300)
    expect(calculosMatematicos.calcular('10', '30', 'multiplicar')).toBe(300)
    expect(calculosMatematicos.calcular(5.6, 4.2, 'multiplicar')).toBe(23.5)
    expect(calculosMatematicos.calcular(10, 30, 'multiplica')).toBe(false)
    expect(calculosMatematicos.calcular(10, 30, 'MultiPLIcaR')).toBe(300)

})

//CENARIO 05 - Teste de validação para dividir dois números
test("Validação de dividir dois numeros", function(){

    expect(calculosMatematicos.calcular(12, 3, 'dividir')).toBe(4)
    expect(calculosMatematicos.calcular('12', '3', 'dividir')).toBe(4)
    expect(calculosMatematicos.calcular(8.2, 2.0, 'dividir')).toBe(4.1)
    expect(calculosMatematicos.calcular(12, 3, 'dividi')).toBe(false)
    expect(calculosMatematicos.calcular(15, 5, 'DiViDIR')).toBe(3)

})