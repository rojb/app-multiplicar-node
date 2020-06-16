const opts = {
    base: {
        demand: true,
        alias: 'b',
        description: 'Establece el valor de la base.'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'Establece el valor del límite. (10 por default)'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar.', opts)
    .command('crear', 'Crea la tabla de una base dada hasta un límite dado.', opts)
    .help()
    .argv;
module.exports = {
    argv
}