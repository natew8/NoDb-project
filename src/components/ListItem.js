import React from 'react'

const ListItem = (props) => {

    return (
        <li>
            <h1 className={'list-title'}><a href={`${props.item.url}`} target={'_blank'} rel={'noreferrer'}>{props.item.song_title}</a></h1>
            <div className={'small-items'}>
                <h2 className={'list-small-item'}>{props.item.time}</h2>
                <h2 className={'list-small-item'}>{props.item.song_key}</h2>
            </div>
            <input id={'notes-input'} placeholder={'notes'} type={'text'} />
            <div className={'remove-button-div'}>
                <img className={'remove-button'} src={'https://cdn1.iconfinder.com/data/icons/feather-2/24/minus-square-512.png'} onClick={() => props.removeSong(props.item.id)} />
            </div>
        </li>
    )
}

export default ListItem