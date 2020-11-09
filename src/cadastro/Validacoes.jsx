import React from 'react';

const validaNome = () => 
{
    const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    let nome = document.getElementById('nome');
    console.log(nome.value)

    if (!regexNome.test(nome.value)){
        return true
    }

    if (nome.value.length < 3){
        return true
    }

    if (nome.value.length > 15){
        return true
    }

    return false
    
}

const validaSobrenome = () => {
    const regexSobrenome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    let sobrenome = document.getElementById('sobrenome');

    if (!regexSobrenome.test(sobrenome.value)){
        return true
    }

    if (sobrenome.value.length < 3){
        return true
    }

    if (sobrenome.value.length > 15){
        return true
    }
    return false
}

const validaEmail =() => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let email = document.getElementById('email');

    if (!regexEmail.test(email.value)){
        return true
    }
    return false
}

const validaCpf = () =>
{
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let cpf = document.getElementById('cpf');

    if (!regexCpf.test(cpf.value)){
        return true
    }
    return false
}

const validaTelefone = () => 
{
    const regexTelefone = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
    let telefone = document.getElementById('telefone');

    if (!regexTelefone.test(telefone.value)){
        return true
    }
    return false
}

const validaCelular = () => 
{
    const regexTelefone = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
    let celular = document.getElementById('celular');

    if (!regexTelefone.test(celular.value)){
       return true
    }
    return false
}

const validaCep = () => 
{
    const regexCep = /^\d{5}-\d{3}$/;
    let cep = document.getElementById ('cep');

    if (!regexCep.test(cep.value)){
       return true 
    }
    return false
}

export {validaNome, validaSobrenome, validaEmail, validaCpf, validaTelefone, validaCelular, validaCep};

