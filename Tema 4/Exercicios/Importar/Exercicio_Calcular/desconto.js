function desconto(prezo) {
    let descontar = (prezo * 20) / 100;

    let total = prezo - descontar;
    console.log(`Desconto aplicado: ${descontar}`);
    console.log(`Prezo a pagar: ${total}`);
}

export{
    desconto
}