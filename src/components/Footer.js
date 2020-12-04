import React from 'react'

const Footer = () => {
    return (
        <div className={'footer'}>
            <span className={'printer-container'}>
                <img src={'https://image.flaticon.com/icons/png/512/39/39898.png'} alt={'Print Set-List'} id={'footer-text-1'} onClick={() => window.print()} />
            </span>
            {/* <div className={'share-container'}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/1024px-Ei-share-apple.svg.png'} alt={'Share Set-List'} id={'footer-text-2'} />
            </div> */}
        </div>
    )
}

export default Footer