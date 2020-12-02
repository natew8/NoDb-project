import React, { Component } from 'react'

class AddSong extends Component {
    constructor(props) {
        super()
        this.state = {
            song_title: '',
            artist_name: '',
            time: '',
            song_key: '',
            url: ''
        }
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.songToEdit && prevProps.songToEdit !== this.props.songToEdit && this.props.songToEdit !== null) {
            this.setState({
                song_title: this.props.songToEdit.song_title,
                artist_name: this.props.songToEdit.artist_name,
                time: this.props.songToEdit.time,
                song_key: this.props.songToEdit.song_key,
                url: this.props.songToEdit.url
            })
        }
    }

    handleTitle = (e) => {
        this.setState({
            song_title: e.target.value
        })
    }
    handleName = (e) => {
        this.setState({
            artist_name: e.target.value
        })
    }
    handleTime = (e) => {
        this.setState({
            time: e.target.value
        })
    }
    handleKey = (e) => {
        this.setState({
            song_key: e.target.value
        })
    }
    handleUrl = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    handleNewClick = (body) => {
        this.props.newSong(body)
        this.setState({
            song_title: '',
            artist_name: '',
            time: '',
            song_key: '',
            url: ''
        })
    }
    handleUpdateClick = (id, songObj) => {
        this.props.handleUpdateSong(id, songObj)
        this.setState({
            song_title: '',
            artist_name: '',
            time: '',
            song_key: '',
            url: ''
        })
    }
    render() {

        return (
            <div className={'input-box'}>
                <h2 className={'add-song'}>new song</h2>
                <div className={'title-artist-input-container'}>
                    <input id={'title-input'} value={this.state.song_title} type={'text'} placeholder={'title'} onChange={this.handleTitle} />
                    <input id={'artist-input'} value={this.state.artist_name} type={'text'} placeholder={'artist/band'} onChange={this.handleName} />
                </div>
                <div className={'time-key-input-container'}>
                    <input id={'time-input'} value={this.state.time} type={'text'} placeholder={'time'} onChange={this.handleTime} />
                    <input id={'key-input'} value={this.state.song_key} type={'text'} placeholder={'key'} onChange={this.handleKey} />
                </div>
                <input value={this.state.url} className={'url-input'} type={'text'} placeholder={'url'} onChange={this.handleUrl} />
                {/* <button className={'add-update-button'} onClick={() => {
                    if (this.props.songToEdit) {
                        console.log('hit1')
                        this.props.updateSong(this.props.songToEdit.id, this.state)
                    } else {
                        console.log('hit2')
                        this.props.newSong(this.state)
                    }
                }}>+</button> */}
                {this.state.song_title && this.state.artist_name && this.state.time ? <button className={'add-update-button'} onClick={() => {
                    if (this.props.songToEdit) {
                        this.handleUpdateClick(this.props.songToEdit.id, this.state)
                    } else {
                        this.handleNewClick(this.state)
                    }
                }}>+ add song</button> : null}

            </div>
        )
    }
}

export default AddSong


