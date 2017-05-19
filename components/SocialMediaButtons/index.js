import React from 'react';
import SVGinline from 'components/SVGinline'
import style from './style.module.less'
import facebook from '!svg-inline-loader!./facebook.svg'
import twitter from '!svg-inline-loader!./twitter.svg'
import { config } from 'config'
import classNames from 'classnames'


function SocialMediaButtons({ className }) {
    return (
        <div className={classNames(className, style.container)}>
            <a href={config.facebook} className={style.link} target="_blank">
                <SVGinline className={style.icon} svg={facebook} />
            </a>
            <a href={config.twitter} className={style.link} target="_blank">
                <SVGinline className={style.icon} svg={twitter} />
            </a>
        </div>
    )
}

export default SocialMediaButtons;