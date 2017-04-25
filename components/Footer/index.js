import React from 'react'
import { Link } from 'react-router'
import style from './style.module.less'
import SetInnerHTML from 'components/SetInnerHTML'
import SVGinline from 'components/SVGinline'
import logoBMBF from '!svg-inline-loader!graphics/logo-BMBF.svg'
import logoWID from 'graphics/logo-WID.png'

function Navigation ({ wissenschaftsjahr, wid }) {
    return (       
        <footer className={style.container}>
            <div className={style.inner}>
                <div className={style.columns}>
                    <SetInnerHTML body={wissenschaftsjahr.body} />
                    <SetInnerHTML body={wid.body} />
                </div>
                <div className={style.logos}>
                    <div className={style.logo}>
                        <h2 className={style.logo_heading}>
                            Gefördert vom
                        </h2>
                        <SVGinline svg={logoBMBF} className={style.logo_img} />
                    </div>
                    <div className={style.logo}>
                        <h2 className={style.logo_heading}>
                            Ein Projekt von
                        </h2>
                        <img src={logoWID} alt="Logo WID" className={style.logo_img} />
                    </div>
                </div>
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
        </footer>
    )
}

export default Navigation;