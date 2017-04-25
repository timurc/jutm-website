import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import { Link } from 'react-scroll'

function Navigation ({ links }) {
    return (
        <nav className={style.container}>
            <ul className={style.list}>
                {
                    map(links, (link, idx) => {
                        return (
                            <li className={style.item}
                                    key={idx}>
                                <Link to={link.to}
                                        smooth={true}
                                        duration={500}>
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;