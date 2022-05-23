
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes..'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note title added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title !== title)
    if (notes.length > duplicateNotes.length) {
        saveNotes(duplicateNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes"))
    notes.forEach((note) => {
        console.log(note.title)  
    })
}

const readNotes= (title) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (duplicateNote) {
        console.log(chalk.green.bold(duplicateNote.title) + ' ' + duplicateNote.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
} 

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}



module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}