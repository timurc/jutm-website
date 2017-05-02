import React from 'react'
import style from './style.module.less';
import SVGinline from 'components/SVGinline';
import logo from '!svg-inline-loader!graphics/WJlogo.svg'
import classNames from 'classnames'

function WJlogo ({ svg, className }) {
    return (
        <SVGinline svg={logo} className={classNames(className, style.container)}/>
    )
}

export default WJlogo;

