import React from 'react'
import style from './style.module.less';
import SVGinline from 'components/SVGinline';
import logo from '!svg-inline-loader!graphics/logo.svg'
import classNames from 'classnames'

function JUTMlogo ({ svg, className }) {
    return (
        <SVGinline svg={logo} className={classNames(style.container, className)}/>
    )
}

export default JUTMlogo;

