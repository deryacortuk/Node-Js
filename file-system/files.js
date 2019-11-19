const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNote()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.magentaBright.inverse('new note added!'))
    } else {
        console.log(chalk.red.yellow.inverse('note title taken!'))
    }


}

const readNote = (title) => {
    const notes = loadNote()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.bgMagentaBright.bgRed.inverse(note.title))
    } else {
        console.log(chalk.red.bgBlueBright.inverse('note not found'))
    }
}

const listNotes = () => {
    const notes = loadNote()
    console.log(chalk.magentaBright.blueBright.inverse('Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('files.json', dataJSON)
}




const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('files.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}

const removeNote = (title) => {
    const notes = loadNote()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.red.greenBright.inverse('note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.blueBright.cyan('no note found'))
    }

}



module.exports = {

    addNote,
    removeNote,
    listNotes,
    readNote

}