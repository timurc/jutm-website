import React from 'react'
import 'style/main.less'
import Navigation from 'components/Navigation'
import WJlogo from 'components/WJlogo'
import Footer from 'components/Footer'
import wid from './_texte/wid.md'
import wissenschaftsjahr from './_texte/wissenschaftsjahr.md'

const LINKS = [
    {
        title: 'Theaterstück',
        href: '#'
    }, {
        title: 'Künstler',
        href: '#'
    }, {
        title: 'Tourplan',
        href: '#'
    }
]

export default function Template({ children }) {
    return (
        <div>
            <Navigation links={LINKS} />
            <WJlogo />
            { children }
            <Footer wid={wid} wissenschaftsjahr={wissenschaftsjahr} />
        </div>
    )
}
