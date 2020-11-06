import React from 'react';

const validaCpf = () =>
{
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let cpf = document.getElementById('cpf');

    if (!regexCpf.test(cpf.value)){
        alert('CPF invalido');
    }

}

export {validaCpf};