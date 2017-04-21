import React from 'react'
import { Link } from 'react-router'
import style from './style.module.less'
import classnames from 'classnames'
import { map } from 'lodash'

function Kiste ({ links, className }) {
    return (
        <div className={classnames(className, style.container)}>
            <div className={style.kiste}>
                <div className={style.schraube}>
                    <div className={style.schraube_inner} />
                </div>
            </div>
        </div>
    )
}

export default Kiste;