import React from 'react'

const Song = (props) => {


    return (
        <span className={'song-container'}>
            <div className={'container-div'}>
                <img className={'add-to-playlist'} src={'https://cdn.iconscout.com/icon/free/png-512/add-playlist-470351.png'} alt={'Add to Playlist'} onClick={() => props.handleSetListAdd(props.song.id)} />
            </div>
            <div className={'name-title-div'}>
                <h1 className={'song-title'} onClick={() => props.handleEditSong(props.song)}> {props.song.song_title} </h1>
                <p className={'artist-name'}>{props.song.artist_name}</p>
            </div>
            <div className={'time-key-containers'} >
                <p>{props.song.time}</p>
            </div>
            <div className={'time-key-containers'}>
                <p>{props.song.song_key}</p>
            </div>
            <img className={'song-delete-button'} src={'https://cdn4.iconfinder.com/data/icons/feather/24/delete-512.png'} alt={'Delete'} onClick={() => props.deleteSong(props.song.id)} />
        </span >
    )
}


export default Song