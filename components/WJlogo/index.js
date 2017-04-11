import React from 'react'
import style from './style.module.less';
import SVGinline from 'components/SVGinline';
import logo from '!svg-inline-loader!graphics/WJlogo.svg'

function WJlogo ({ svg, className }) {
    return (
        <SVGinline svg={logo} className={style.container}/>
    )
}

export default WJlogo;

