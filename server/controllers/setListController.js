const songs = require('../data.json')
const setList = []

let listId = 0
let note = ''


module.exports = {
    getSetList: (req, res) => {
        res.status(200).send(setList)
    },

    addToSetList: (req, res) => {
        const { song_id } = req.params
        const index = songs.findIndex(e => e.id === +song_id)
        if (index === -1) {
            return res.status(404).send('Song Not Found.')
        } else {
            const song = songs.find((element) => element.id === +song_id)
            song.list_id = listId
            song.note = note
            if (setList.includes(song)) {
                res.status(500).send('Song already in Set List')
            } else {
                setList.push(song)
                listId++
                res.status(200).send(setList)
            }


        }

    },

    removeSong: (req, res) => {
        const { list_id } = req.params
        const index = setList.findIndex(e => e.id === +list_id)
        if (index === -1) {
            return res.status(404).send(`Song not in Set List`)
        } else {
            setList.splice(index, 1)
            res.status(200).send(setList)
        }
    },

    clearList: (req, res) => {
        setList.splice(0, setList.length)
        res.status(200).send(setList)
    },
    addNote: (req, res) => {
        const { list_id } = req.params
        const { note } = req.body
        const index = setList.findIndex(e => e.list_id === +list_id)
        let listSong = setList[index]
        setList[index] = {
            ...listSong, note: note
        }
        console.log(note)
        console.log(index)
        console.log(list_id)
        res.status(200).send(setList)

    }
}