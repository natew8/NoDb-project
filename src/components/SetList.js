import React from 'react'
import ListItem from './ListItem'

function SetList(props) {
    const setMap = props.setList.map((element, index) => {
        return <ListItem
            key={index}
            item={element}
            removeSong={props.removeSong}
            setList={props.setList}
            addNote={props.addNote}
        />
    })


    return (
        <div className={'set-list-container'}>
            <div className={'list-header'}>
                <h1 className={'set-list-title'}>My Set-List</h1>
                {props.setList.length <= 0 ? null : <button className={'clear-list-button'} onClick={() => props.clearSetList()}>clear list</button>}
            </div>
            {props.setList.length <= 0 ? <h1 id={'empty-set-list-message'}> ...your Set-List is empty &#9785; </h1> : <div>{setMap}</div>}
        </div>
    )
}
export default SetList