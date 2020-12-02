const songs = require('../data.json')
let id = songs.length
/*
{
id: number,
song_title: string,
artist_title: string,
song_key: string,
time: string,
url: string
}
*/

module.exports = {
    getAllSongs: (req, res) => {
        res.status(200).send(songs)
    },

    addSong: (req, res) => {
        const { song_title, artist_name, song_key, time, url } = req.body
        let newSong = {
            id: id,
            song_title: song_title,
            artist_name: artist_name,
            song_key: song_key,
            time: time,
            url: url
        }
        songs.push(newSong)
        id++
        res.status(200).send(songs)
    },

    updateSong: (req, res) => {
        const { song_id } = req.params
        const { song_title, artist_name, song_key, time, url } = req.body
        const index = songs.findIndex(e => e.id === +song_id)
        let song = songs[index]
        songs[index] = {
            id: song.id,
            song_title: song_title || song.song_title,
            artist_name: artist_name || song.artist_name,
            song_key: song_key || song.song_key,
            time: time || song.time,
            url: url || song.url
        }
        res.status(200).send(songs)
    },

    deleteSong: (req, res) => {
        const { song_id } = req.params
        const index = songs.findIndex(e => e.id === +song_id)
        songs.splice(index, 1)
        res.status(200).send(songs)
    }
}