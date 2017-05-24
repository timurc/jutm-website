import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import moment from 'moment'
import 'moment/locale/de';

function Tour ({ dates }) {
    return (
        <ul className={style.list}>
            { map(dates, (date, idx) => <Event key={idx} date={date} /> )}
        </ul>
    )
}

function Event ({ date }) {
    const { venue, venue2 , city, street, zipCode, link } = date;
    const dates = map(date.dates, (d) => moment(d));

    return (
        <li className={style.event}>
            <div>
                <h2 className={style.venue}>
                    {city}
                </h2>
                <div className={style.city}>
                    { link ? 
                        <a href={link} target="_blank">{venue}</a> :
                        <span>{venue}</span>
                    }
                </div>
                { venue2 
                    ? <div>{venue2}</div>
                    : null
                }
                <div className={style.adress}>
                    {street}<br />
                    {zipCode} {city}
                </div>
            </div>
            <ul className={style.dates}>
                { map(dates, (d, idx) => {
                        return <Date key={idx} date={d} />
                    }
                )}
            </ul>
        </li>
    )
}

function Date ({ date }) {
    const formattedDate = date.format('DD.MM. ~ HH:mm')
    return (
        <li className={style.date}>
            { formattedDate }
        </li>
    )
}

export default Tour;