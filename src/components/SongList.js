import React, { Component } from 'react'
import AddSong from './AddSong'
import Song from './Song'


class SongList extends Component {
    constructor(props) {
        super()
        this.state = {
            songToEdit: null,
            id: props.id,
            visible: false
        }
    }
    handleState = (id, songObj) => {
        this.props.updateSong(id, songObj)
        this.setState({
            songToEdit: null,
            visible: !this.state.visible
        })
    }
    handleEditSong = (songObj) => {
        this.setState({
            songToEdit: songObj,
            visible: true
        })
    }
    handleSetListAdd = (id) => {
        this.props.addToSetList(id)
    }
    handleMouseDown = () => {
        this.toggleAddSong()
    }
    toggleAddSong = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        const songMap = this.props.songList.map((e, index) => {

            return (
                <Song
                    key={index}
                    song={e}
                    handleSetListAdd={this.handleSetListAdd}
                    deleteSong={this.props.deleteSong}
                    updateSong={this.props.updateSong}
                    songList={this.props.songList}
                    handleEditSong={this.handleEditSong}
                    handleMouseDown={this.handleMouseDown} />
            )
        })
        return (
            <div className={'songList-container'}>
                <h1 className={'song-list-title'}>Song List</h1>
                <div className={'song-map-container'}>
                    {songMap}
                </div>
                <AddSong newSong={this.props.newSong}
                    songToEdit={this.state.songToEdit}
                    updateSong={this.props.updateSong}
                    handleState={this.handleState}
                    handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
            </div>
        )
    }
}

export default SongList
