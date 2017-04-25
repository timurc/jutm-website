import React from 'react'
import { Link } from 'react-router'
import style from './style.module.less'
import SetInnerHTML from 'components/SetInnerHTML'

function Navigation ({ wissenschaftsjahr, wid }) {
    return (       
        <footer className={style.container}>
            <div className={style.inner}>
                <div className={style.columns}>
                    <SetInnerHTML body={wissenschaftsjahr.body} />
                    <SetInnerHTML body={wid.body} />
                    <ul className={style.links}>
                        <li>
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                        <li>
                            <Link to="/impressum">Impressum</Link>
                        </li>
                        <li>
                            <Link to="/disclamer">Disclamer</Link>
                        </li>
                        <li>
                            <Link to="/datenschutz">Datenschutz</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Navigation;