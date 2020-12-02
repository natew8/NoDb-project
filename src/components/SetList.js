import React from 'react'
import ListItem from './ListItem'

function SetList(props) {
    let setMapped = props.setList.map((element, index) => {
        return <ListItem
            key={index}
            songItem={element}
            removeSong={props.removeSong} />
    })

    return (
        <div className={'set-list-container'}>
            <h1 className={'set-list-title'}>Set-List 1</h1>
            <div>{setMapped}</div>
        </div>
    )
}
export default SetList