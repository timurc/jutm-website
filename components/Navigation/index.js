import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router'

function Navigation ({ links }) {
    return (
        <nav className={style.container}>
            <ul className={style.list}>
                {
                    map(links, (link, idx) => {
                        return (
                            <li className={style.item}
                                    key={idx}>
                                { link.pageLink ? 
                                    <RouterLink  to={link.to}>
                                        {link.title}
                                    </RouterLink> :
                                    <ScrollLink to={link.to}
                                            smooth={true}
                                            duration={500}>
                                        {link.title}
                                    </ScrollLink>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;