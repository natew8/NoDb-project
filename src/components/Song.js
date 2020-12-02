import React from 'react'

const Song = (props) => {

    return (
        <div className={'song-container'} onDoubleClick={() => props.handleEditSong(props.song)}>
            <div className={'container-div'}>
                <img className={'add-to-playlist'} src={'https://cdn.iconscout.com/icon/free/png-512/add-playlist-470351.png'} alt={'Add to Playlist'} onClick={() => props.handlePlayListAdd(props.song.id)} />
            </div>
            <div className={'name-title-div'}>
                <h1 className={'song-title'} onDoubleClick={() => props.handleEditSong(props.song)}>{props.song.song_title} </h1>
                <p className={'artist-name'} onDoubleClick={() => props.handleEditSong(props.song)}>{props.song.artist_name}</p>
            </div>
            <div className={'time-key-containers'} >
                <p>{props.song.time}</p>
            </div>
            <div className={'time-key-containers'}>
                <p>{props.song.song_key}</p>
            </div>
            <img className={'song-delete-button'} src={'https://cdn4.iconfinder.com/data/icons/browser-ui-small-size-optimized-set/154/close-delete-cancel-operation-browser-512.png'} alt={'Delete'} onClick={() => props.deleteSong(props.song.id)} />
        </div>
    )
}


export default Song