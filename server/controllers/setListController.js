const songs = require('../data.json')
const setList = {
    list: [{
        "id": 0,
        "song_title": "Human Nature",
        "artist_name": "Michael Jackson",
        "song_key": "D",
        "time": "4:05",
        "url": "https://tabs.ultimate-guitar.com/tab/michael-jackson/human-nature-chords-212731",
        "list_id": 0
    },
    {
        "id": 4,
        "song_title": "Honesty",
        "artist_name": "Pink Sweat$",
        "song_key": "A",
        "time": "3:09",
        "url": "https://genius.com/Pink-sweat-honesty-lyrics",
        "list_id": 1
    },
    {
        "id": 6,
        "song_title": "Moment",
        "artist_name": "Jay Warren",
        "song_key": "A",
        "time": "3:15",
        "url": "https://www.youtube.com/watch?v=Vign_i9G6Yw",
        "list_id": 2
    },
    {
        "id": 7,
        "song_title": "Beyond",
        "artist_name": "Leon Bridges",
        "song_key": "F#",
        "time": "4:00",
        "url": "https://tabs.ultimate-guitar.com/tab/leon-bridges/beyond-chords-2371937",
        "list_id": 3
    }]
}

let listId = 0
let id = songs.length


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