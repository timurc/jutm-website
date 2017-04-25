import React from 'react'
import 'style/main.less'
import Navigation from 'components/Navigation'
import WJlogo from 'components/WJlogo'

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
        </div>
    )
}
