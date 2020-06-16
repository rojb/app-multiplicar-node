/*Imprimir la tabla de la base 
hasta el 10 y guardarla en un .txt*/

const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido: ${base} no es un número.`);
            return;
        }
        let result = '';
        for (let i = 1; i <= limite; i++) {
            result += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, result, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}
module.exports = {
    crearArchivo,
    listarTabla
}