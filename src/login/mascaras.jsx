export const cpfMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const validadata = () => {
    let data = document.getElementById("nascimento").value; // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    let data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if (data_array[0].length != 4) {
        data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
    }

    // comparo as datas e calculo a idade
    let hoje = new Date();
    let nasc = new Date(data);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    let m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if (idade < 18) {
        alert("Pessoas menores de 18 não podem se cadastrar.");
        return false;
    }

    // if (idade >= 18 && idade <= 60) {
    //     alert("Maior de 18, pode se cadastrar.");
    //     return true;
    // }

    // se for maior que 60 não vai acontecer nada!
    return false;
}

export const validarSenha = () => {
    let senha1 = document.getElementById("senha");
    let senha2 = document.getElementById("senhaConf");
    let s1 = senha1.value;
    let s2 = senha2.value;
    if (s1 == s2) {
        return true;
    } else {
        alert("Senhas não conferem. Verifique o valor digitado.");
        return false;
    }
}
