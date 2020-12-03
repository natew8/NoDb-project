const express = require('express')
const songListCtrl = require('./controllers/songListController')
const setListCtrl = require('./controllers/setListController')
const app = express()
const LISTENING_PORT = 5000
app.use(express.json())


//songList endpoints
app.get(`/api/songList`, songListCtrl.getAllSongs)
app.post('/api/songList', songListCtrl.addSong)
app.put('/api/songList/:song_id', songListCtrl.updateSong)
app.delete('/api/songList/:song_id', songListCtrl.deleteSong)

//setList endpoints
app.get('/api/setList', setListCtrl.getSetList)
app.post('/api/setList/:song_id', setListCtrl.addToSetList)
app.put('/api/setList/:list_id', setListCtrl.addNote)
app.delete('/api/setList/:list_id', setListCtrl.removeSong)
app.delete('/api/setList', setListCtrl.clearList)




app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}`))