import React, { Component } from 'react'
import SongList from './SongList'
import SetList from './SetList'
import axios from 'axios'


class Display extends Component {
    constructor() {
        super()
        this.state = {
            songList: [],
            setList: []
        }
        this.newSong = this.newSong.bind(this)
        this.updateSong = this.updateSong.bind(this)
        this.deleteSong = this.deleteSong.bind(this)
        this.addToSetList = this.addToSetList.bind(this)
        this.removeSong = this.removeSong.bind(this)
    }

    componentDidMount() {
        axios.get('/api/songList').then(res => {
            this.setState({
                songList: res.data,
            })
        })
    }

    newSong(song_title, artist_name, time, song_key, url) {

        axios.post('/api/songList', song_title, artist_name, time, song_key, url).then(res => {
            this.setState({
                songList: res.data
            })
        })
        // console.log(this.state.songList)
    }
    updateSong(id, songObj) {
        axios.put(`/api/songList/${id}`, songObj).then(res => {
            this.setState({
                songList: res.data

            })
        })
    }
    deleteSong(id) {
        console.log(id)
        axios.delete(`/api/songList/${id}`).then(res => {
            this.setState({
                songList: res.data
            })
        })
    }
    addToSetList(id) {
        console.log(id)
        axios.post(`/api/setList/${id}`).then(res => {
            this.setState({
                setList: res.data
            })
        })
    }

    removeSong(id) {
        console.log(id)
    }

    render() {
        return (
            <div>
                <SetList
                    setList={this.state.setList}
                    songList={this.state.songList}
                    removeSong={this.removeSong}
                />
                <SongList
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