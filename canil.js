//Dias de 1 a 7, sendo 1 como domingo e 7 como sabado.

menorPreco(1, 2, 5)

function menorPreco(data, caesPequenos, caesGrandes) {
    let chowChawgas = chawgas(caesPequenos, caesGrandes);
    let meuCaninoFeliz = caninoFeliz(data, caesPequenos, caesGrandes);
    let vaiRex = rex(data, caesPequenos, caesGrandes);

    console.log(`${chowChawgas} - chowchawgas`)
    console.log(`${meuCaninoFeliz} meu canino feliz`)
    console.log(`${vaiRex} vai rex`)

    if (chowChawgas < meuCaninoFeliz && chowChawgas < vaiRex) {
        console.log(
            `O preço mais acessivel é o ChowChawgas no valor de ${chowChawgas}`
        );
    } else if (chowChawgas > meuCaninoFeliz && meuCaninoFeliz < vaiRex) {
        console.log(
            `O preço mais acessivel é o Meu canino Feliz no valor de ${meuCaninoFeliz}`
        );
    } else if (vaiRex < meuCaninoFeliz && chowChawgas > vaiRex) {
        console.log(
            `O preço mais acessivel é o Vai Rex no valor de ${vaiRex}`
        );
    }else{
        if (chowChawgas == vaiRex || chowChawgas == meuCaninoFeliz) {
            console.log(
                `O preço mais acessivel é o ChowChawgas no valor de ${chowChawgas}. Com a kilometragem de 0,8km`
            );
        }else{
            console.log(
                `O preço mais acessivel é o Vai Rex no valor de ${vaiRex}. Com a kilometragem de 1,7km`
            );
        }
    }
}

function chawgas(caesPequenos, caesGrandes) {
    let chowChawgas = caesPequenos * 30 + caesGrandes * 45;

    return chowChawgas;
}

function caninoFeliz(data, caesPequenos, caesGrandes) {
    if (verificadorDeData(data) == undefined)
        return console.error("ERRO: Data invalida");
    if (data == 1 || data == 7) {
        let meuCaninoFeliz = caesPequenos * 24 + caesGrandes * 48;
        return meuCaninoFeliz;
    }

    let meuCaninoFeliz = caesPequenos * 20 + caesGrandes * 40;

    return meuCaninoFeliz;
}

function rex(data, caesPequenos, caesGrandes) {
    if (verificadorDeData(data) == undefined)
        return console.error("ERRO: Data invalida");
    if (data == 1 || data == 7) {
        let vaiRex = caesPequenos * 20 + caesGrandes * 55;
        return vaiRex;
    }

    let meuCaninoFeliz = caesPequenos * 15 + caesGrandes * 50;

    return meuCaninoFeliz;
}

function verificadorDeData(data) {
    if (data >= 1 && data <= 7) {
        return data;
    }

    return;
}
