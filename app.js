const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
console.log(`${base} ${limite}`);
switch (comando) {
    case 'listar':
        listarArchivo(base, limite)
            .then(l => console.log(`OK \n${l}`.green))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`${archivo}`.rainbow))
            .catch(e => console.log(e));
        break;

    default:
        console.log('COMANDO NO RECONOCIDO');

}

//console.log(multiplicar);
//console.log(process.argv);
let argv2 = process.argv;