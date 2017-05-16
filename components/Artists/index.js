import React from 'react'
import style from './style.module.less'
import classNames from 'classnames'
import { map } from 'lodash'
import SetInnerHTML from 'components/SetInnerHTML'

function Artists ({ artists }) {
    return (
        <ul className={style.list}>
            { map(artists, (artist, idx) => <Artist key={idx} {...artist.data} />) }
        </ul>
    )
}

function Artist({ name, body, image }) {
    const img = image ? require('pages/_texte/kunstler/' + image + '.jpg') : undefined;

    return (
        <li className={style.artist}>
            <h2 className={style.name}>{name}</h2>
            { img ? 
                <div className={style.image_container}>
                    <img className={style.image} src={img} />
                </div> 
                : null }
            <SetInnerHTML body={body} />
        </li>
    )
}

export default Artists;