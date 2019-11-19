const yargs = require('yargs')
const chalk = require('chalk')
const files = require('./files.js')


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note ',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        files.addNote(argv.title, argv.body)

    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler(argv) {
        files.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        files.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'read the note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        files.readNote(argv.title)
    }
})


yargs.parse()