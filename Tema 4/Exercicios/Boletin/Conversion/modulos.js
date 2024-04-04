let celsius = (farenhait) => {
    let cels = (farenhait - 32) * 5 / 9;

    console.log(`${farenhait} grados Farenhait son ${cels} grados Celsius`);
}

let farenhait = (celsius) => {
    let faren = (celsius * 9 / 5) + 32;

    console.log(`${celsius} grados Celsius son ${faren} grados Farenhait`);
}

let metros = (pie) =>{
    let medMetr = pie / 3.281;

    console.log(`${pie} pies son ${medMetr} metros`);
}

let pies = (metro) =>{
    let medPie = metro * 3.281;

    console.log(`${metro} metros son ${medPie} pies`);
}

let kilogr = (libra) =>{
    let pesKg = libra / 2.205;
    
    console.log(`${libra} libras son ${pesKg} Kg`);
}

let libras = (kg) =>{
    let pesLibr = kg * 2.205;
    
    console.log(`${kg} Kg son ${pesLibr} libras`);
}

export{celsius, farenhait, metros, pies, kilogr, libras}