const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime la tabla', opts)
    .command('crear', 'imprime la tabla', opts).help()
    .argv;


module.exports = {
    argv
}