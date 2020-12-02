import React from 'react'
import ListItem from './ListItem'

function SetList(props) {
    const setMap = props.setList.map((element, index) => {
        return <ListItem
            key={index}
            item={element}
            removeSong={props.removeSong}
            songList={props.songList}
        />
    })
    return (
        <div className={'set-list-container'}>
            <h1 className={'set-list-title'}>Set-List 1</h1>
            <ol>{setMap}</ol>
        </div>
    )
}
export default SetList