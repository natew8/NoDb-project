import React, { Component } from 'react'


class ListItem extends Component {
    constructor(props) {
        super()
        this.state = {
            note: props.item.note
        }
    }

    handleInput = (e) => {
        this.setState({
            note: e.target.value
        })

    }

    handleKeyHit = (e) => {
        if (e.key === 'Enter') {
            console.log('hit 1')
            this.props.addNote(this.props.item.list_id, this.state)
        }
    }

    render() {
        return (
            <li>
                <h1 className={'list-title'}><a href={`${this.props.item.url}`} target={'_blank'} rel={'noreferrer'}>{this.props.item.song_title}</a></h1>
                <div className={'small-items'}>
                    <h2 className={'list-small-item'}>{this.props.item.time}</h2>
                    <h2 className={'list-small-item'}>{this.props.item.song_key}</h2>
                </div>
                <input value={this.state.note} id={'notes-input'} placeholder={'notes'} type={'text'} onChange={this.handleInput} onKeyPress={this.handleKeyHit} />
                <div className={'remove-button-div'}>
                    <img className={'remove-button'} src={'https://cdn1.iconfinder.com/data/icons/feather-2/24/minus-square-512.png'} alt={'remove from list'} onClick={() => this.props.removeSong(this.props.item.id)} />
                </div>
            </li >
        )
    }



}


export default ListItem