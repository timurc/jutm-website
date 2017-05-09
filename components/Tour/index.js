import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'

function Tour ({ dates }) {
    return (
        <ul className={style.list}>
            { map(dates, (date, idx) => <Date key={idx} date={date} /> )}
        </ul>
    )
}

function Date ({ date }) {
    return (
        <li>{date.venue}</li>
    )
}

export default Tour;