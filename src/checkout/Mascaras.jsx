import React from 'react';

const cartaoMask = value => 
{
    return value
        .replace(/\D/g, '') //substitui qualquer caracter diferente de numero por nada 
        .replace(/(\d{4})(\d)/, '$1.$2')//acrescenta ponto entre a primeira e segunda sequencia de numeros
        .replace(/(\d{4})(\d)/, '$1.$2')//ponto entre a segunda e terceira sequencia de numeros
        .replace(/(\d{4})(\d)/, "$1.$2")//ponto entre a terceira e a quarta sequencia de numeros
        .replace(/(\d{4})\d+?$/, '$1')//preenche a ultima sequencia ignorando tudo que estiver depois dos 4 numeros
}

const codMask = value => 
{
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})\d+?$/, '$1')
}

const cpfMask = value => {
    return value
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d)/, '$1.$2') 
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') 
}

const cepMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
}

export {cartaoMask, codMask, cpfMask, cepMask}