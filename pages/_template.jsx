import React from 'react'
import 'style/main.less'
import WJlogo from 'components/WJlogo'
import Footer from 'components/Footer'
import wid from './_texte/wid.md'
import wissenschaftsjahr from './_texte/wissenschaftsjahr.md'

export default function Template({ children }) {
    return (
        <div className="mainContainer">
            <WJlogo />
            { children }
            <Footer wid={wid} wissenschaftsjahr={wissenschaftsjahr} />
        </div>
    )
}
