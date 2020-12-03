import React from 'react'
import ListItem from './ListItem'

function SetList(props) {
    const setMap = props.setList.map((element, index) => {
        return <ListItem
            key={index}
            item={element}
            removeSong={props.removeSong}
        />
    })
    return (
        <div className={'set-list-container'}>
            <div className={'list-header'}>
                <h1 className={'set-list-title'}>My Set-List</h1>
                <button className={'clear-list-button'} onClick={() => props.clearSetList()}>clear list</button>
            </div>
            <div>{setMap}</div>
        </div>
    )
}
export default SetList