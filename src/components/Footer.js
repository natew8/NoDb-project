import React from 'react'

const Footer = (props) => {
    return (
        <div className={'footer'}>
            <div className={'printer-container'}>
                <img src={'https://image.flaticon.com/icons/png/512/39/39898.png'} alt={'Print Set-List'} id={'footer-text-1'} onClick={() => window.print()} />
            </div>
            <div className={'share-container'}>
                <img src={'https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png'} alt={'Share Set-List'} id={'footer-text-2'} />
            </div>
        </div>
    )
}

export default Footer