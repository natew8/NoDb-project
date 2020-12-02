import React, { Component } from 'react'

import Song from './Song'
import AddSong from './AddSong'

class SongList extends Component {
    constructor(props) {
        super()
        this.state = {
            songToEdit: null,
            id: props.id
        }
    }
    handleState = (id, songObj) => {
        this.props.updateSong(id, songObj)
        setTimeout(() => {
            this.setState({
                songToEdit: null
            })
        }, 2000);
    }
    handleEditSong = (songObj) => {
        this.setState({
            songToEdit: songObj
        })
    }
    handleSetListAdd = (id) => {
        this.props.addToSetList(id)
    }
    render(props) {
        const songMap = this.props.songList.map((e, index) => {
            return (
                <Song
                    key={index}
                    song={e}
                    handleSetListAdd={this.handleSetListAdd}
                    deleteSong={this.props.deleteSong}
                    updateSong={this.props.updateSong}
                    songList={this.props.songList}
                    handleEditSong={this.handleEditSong} />
            )
        })
        return (
            <div className={'songList-container'}>
                {songMap}
                <AddSong newSong={this.props.newSong}
                    songToEdit={this.state.songToEdit}
                    updateSong={this.props.updateSong}
                    handleState={this.handleState} />
            </div>
        )
    }
}

export default SongList
