//const { rejects } = require('assert');
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} No es u numero`);
            return;
        }

        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i} \n`;
        }

        //console.log(tabla);
        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
}

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} No es u numero`);
            return;
        }

        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i} \n`;
        }
        resolve(tabla);
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}