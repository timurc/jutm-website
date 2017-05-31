import React from 'react'
import style from './style.module.less';
import SVGinline from 'components/SVGinline';
import logo from '!svg-inline-loader!graphics/WJlogo.svg'
import classNames from 'classnames'

function WJlogo ({ svg, className }) {
    return (
        <a href="https://www.wissenschaftsjahr.de/2016-17/" target="_blank">
            <SVGinline svg={logo} className={classNames(className, style.container)}/>
        </a>
    )
}

export default WJlogo;

