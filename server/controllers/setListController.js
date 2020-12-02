const songs = require('../data.json')
const setList = {
    list: []
}

let listId = 0


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

            setList.list.push(song)

            listId++

            res.status(200).send(setList)
        }

    },

    removeSong: (req, res) => {
        const { list_id } = req.params
        const index = setList.list.findIndex(e => e.id === +list_id)
        if (index === -1) {
            return res.status(404).send(`Song not in Set List`)
        } else {
            setList.list.splice(index, 1)
            res.status(200).send(setList)
        }
    },

    clearList: (req, res) => {
        setList.list = []
        res.status(200).send(setList)
    }
}