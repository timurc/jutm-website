import React from 'react'
import { Link } from 'react-router'
import style from './style.module.less'
import classnames from 'classnames'
import { map } from 'lodash'

function Kiste ({ links, raiseArm, className }) {
    return (
        <div className={classnames(className, style.container)}>
            <div className={style.kiste}>
                <div className={style.body} />
                <div className={style.schraube}>
                    <div className={style.schraube_inner} />
                </div>
                <div className={classnames(style.arm_container, style.arm_container_l)}>
                    <div className={classnames(
                                style.arm, 
                                style.arm_l,
                                {[style.arm__raise]: raiseArm === 'L'}
                            )}>
                        <div className={classnames(style.arm_l_lower, style.arm_lower)} />
                    </div>
                </div>
                <div className={classnames(style.arm_container, style.arm_container_r)}>
                    <div className={classnames(
                                style.arm, 
                                style.arm_r,
                                {[style.arm__raise]: raiseArm === 'R'}
                            )}>
                        <div className={classnames(style.arm_l_lower, style.arm_lower)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kiste;