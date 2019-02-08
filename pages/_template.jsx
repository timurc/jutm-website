import React from 'react'
import 'style/main.less'
import WJlogo from 'components/WJlogo'
import SocialMediaButtons from 'components/SocialMediaButtons'
import Footer from 'components/Footer'
import wid from './_texte/wid.md'
import wissenschaftsjahr from './_texte/wissenschaftsjahr.md'
import Navigation from 'components/Navigation'
import ArchiveHint from 'components/ArchiveHint'
import style from './_template.module.less'

const HOME_LINKS = [
    {
        title: 'Theaterstück',
        to: 'beschreibung'
    }, {
        title: 'Tourplan',
        to: 'tour'
    }, {
        title: 'Künstler',
        to: 'artists'
    }, {
        title: 'Wissenschaftsjahr',
        to: 'wissenschaftsjahr'
    }

]

const BACK = [{title: 'Zurück', to: '/', pageLink: true}]

export default function Template({ children, location}) {

    const links = location.pathname === '/' ? HOME_LINKS : BACK

    return (
        <div className="mainContainer">
            <ArchiveHint />
            <WJlogo />
            <SocialMediaButtons className={style.social_buttons} />
            <Navigation links={links} />
            { children }
            <Footer wid={wid} wissenschaftsjahr={wissenschaftsjahr} />
        </div>
    )
}
