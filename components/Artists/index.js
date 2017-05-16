import React from 'react'
import style from './style.module.less'
import classNames from 'classnames'
import { map } from 'lodash'
import SetInnerHTML from 'components/SetInnerHTML'

function Artists ({ artists }) {
    console.log(artists)
    return (
        <ul className={style.list}>
            { map(artists, (artist, idx) => <Artist key={idx} dir={artist.file.dir} {...artist.data} />) }
        </ul>
    )
}

function Artist({ name, body, image, dir }) {
    const img = image ? '/' + dir + '/' + image + '.jpg' : undefined;

    return (
        <li>
            <img src={img} />
            <h2>{name}</h2>
            <SetInnerHTML body={body} />
        </li>
    )
}

export default Artists;