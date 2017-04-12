import React from 'react'
import 'style/main.less'
import Navigation from 'components/Navigation'
import WJlogo from 'components/WJlogo'
import Kiste from 'components/Kiste'

const LINKS = [
    {
        title: 'Das Stück',
        href: '#'
    }, {
        title: 'Termine',
        href: '#'
    }, {
        title: 'Förderer',
        href: '#'
    }, {
        title: 'Kay',
        href: '#'
    }
]

export default function Template({ children }) {
    return (
        <div>
            <Navigation links={LINKS} />
            <WJlogo />
            <Kiste />
            { children }
        </div>
    )
}
