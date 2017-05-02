import React from 'react'
import 'style/main.less'
import WJlogo from 'components/WJlogo'
import Footer from 'components/Footer'
import wid from './_texte/wid.md'
import wissenschaftsjahr from './_texte/wissenschaftsjahr.md'
import Navigation from 'components/Navigation'

const HOME_LINKS = [
    {
        title: 'Theaterstück',
        to: 'beschreibung'
    }, {
        title: 'Künstler',
        to: 'beschreibung'
    }, {
        title: 'Tourplan',
        to: 'beschreibung'
    }
]

const BACK = [{title: 'Zurück', to: '/', pageLink: true}]

export default function Template({ children, location}) {

    const links = location.pathname === '/' ? HOME_LINKS : BACK

    return (
        <div className="mainContainer">
            <WJlogo />
            <Navigation links={links} />
            { children }
            <Footer wid={wid} wissenschaftsjahr={wissenschaftsjahr} />
        </div>
    )
}
