import React from 'react'
import { Link } from 'react-router'
import style from './style.module.less'
import SetInnerHTML from 'components/SetInnerHTML'
import SVGinline from 'components/SVGinline'
import logoBMBF from '!svg-inline-loader!graphics/logo-BMBF.svg'
import logoWID from 'graphics/logo-WID.png'
import logoWJ from '!svg-inline-loader!graphics/WJlogo.svg'
import classNames from 'classnames'
import SocialMediaButtons from 'components/SocialMediaButtons'

function Navigation ({ wissenschaftsjahr, wid }) {
    return (       
        <footer className={style.container}>
            <div className={style.inner}>
                <div className={style.columns}>
                    <div id='wissenschaftsjahr'>
                        <SetInnerHTML body={wissenschaftsjahr.body} />
                    </div>
                    <SetInnerHTML body={wid.body} />
                </div>
                <div className={style.logos}>
                    <div className={classNames(style.logo, style.logo_bmbf)}>
                        <a href="https://www.bmbf.de/" target="_blank">
                            <SVGinline svg={logoBMBF} className={style.logo_img} />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <h2 className={style.logo_heading}>
                            Ein Projekt von
                        </h2>
                        <a href="https://www.wissenschaft-im-dialog.de/" target="_blank">
                            <img src={logoWID} alt="Logo WID" className={classNames(style.logo_img, style.logo_img__wid)} />
                        </a>
                    </div>
                    <div className={classNames(style.logo, style.logo_wj)}>
                        <a href="https://www.wissenschaftsjahr.de/2016-17/" target="_blank">
                            <SVGinline svg={logoWJ} className={style.logo_img} />
                        </a>
                    </div>
                </div>
                <ul className={style.links}>
                    <li>
                        <Link to="/kontakt/">Kontakt</Link>
                    </li>
                    <li>
                        <Link to="/impressum/">Impressum</Link>
                    </li>
                    <li>
                        <Link to="/disclamer/">Disclaimer</Link>
                    </li>
                    <li>
                        <Link to="/datenschutz/">Datenschutz</Link>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.wissenschaft-im-dialog.de/medien/publikationen-fotos-videos/jona-und-die-tiefseemonster/">Presse</a>
                    </li>
                </ul>
                <SocialMediaButtons className={style.social_buttons} />
            </div>
        </footer>
    )
}

export default Navigation;