import React, { Component } from 'react'
import SongList from './SongList'
import SetList from './SetList'
import axios from 'axios'


class Display extends Component {
    constructor() {
        super()
        this.state = {
            songList: [],
            setList: [],
            note: ''
        }
        this.newSong = this.newSong.bind(this)
        this.updateSong = this.updateSong.bind(this)
        this.deleteSong = this.deleteSong.bind(this)
        this.addToSetList = this.addToSetList.bind(this)
        this.removeSong = this.removeSong.bind(this)
        this.clearSetList = this.clearSetList.bind(this)
        this.addNote = this.addNote.bind(this)
    }

    componentDidMount() {
        axios.get('/api/songList').then(res => {
            axios.get('/api/setList').then(setRes => {
                this.setState({
                    songList: res.data,
                    setList: setRes.data

                })
            })
        })
    }

    newSong(song_title, artist_name, time, song_key, url) {

        axios.post('/api/songList', song_title, artist_name, time, song_key, url).then(res => {
            this.setState({
                songList: res.data
            })
        })
        console.log(this.state.songList)
    }
    updateSong(id, songObj) {
        axios.put(`/api/songList/${id}`, songObj).then(res => {
            this.setState({
                songList: res.data

            })
        })
    }
    deleteSong(id) {
        axios.delete(`/api/songList/${id}`).then(res => {
            this.setState({
                songList: res.data
            })
        })
    }
    addToSetList(id) {
        axios.post(`/api/setList/${id}`).then(setRes => {
            this.setState({
                setList: setRes.data
            })
        }).catch((err) => {
            alert(err.response.data)
        })
    }

    removeSong(id) {
        axios.delete(`/api/setList/${id}`).then(res => {
            this.setState({
                setList: res.data
            })
        })
    }
    clearSetList() {
        console.log(this.state.setList)
        axios.delete('/api/setList').then(res => {
            this.setState({
                setList: []
            })
        })
    }
    addNote(id, body) {
        console.log(id)
        console.log(body)
        axios.put(`/api/setList/${id}`, body).then(res => {
            this.setState({
                setList: res.data
            })
        })

    }
    render() {
        return (
            <div className={'display-container'}>
                <SetList
                    setList={this.state.setList}
                    songList={this.state.songList}
                    removeSong={this.removeSong}
                    clearSetList={this.clearSetList}
                    note={this.state.note}
                    addNote={this.addNote}
                />
                {/* <h1 className={'message-button'}>Click Here to view Song List</h1> */}
                <SongList
                    setList={this.state.setList}
                    newSong={this.newSong}
                    updateSong={this.updateSong}
                    deleteSong={this.deleteSong}
                    addToSetList={this.addToSetList}
                    songList={this.state.songList} />
            </div>
        )
    }


}




export default Display