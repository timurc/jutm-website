import React from 'react'
import { Link } from 'react-router'
import style from './style.module.less'
import { map } from 'lodash'

function Navigation ({ links }) {
    return (
        <nav className={style.container}>
            <ul className={style.list}>
                {
                    map(links, (link, idx) => {
                        return (
                            <li className={style.item}
                                    key={idx}>
                                {link.title}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;