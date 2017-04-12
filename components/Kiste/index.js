import React from 'react'
import { Link } from 'react-router'
import style from './style.module.less'
import { map } from 'lodash'

function Kiste ({ links }) {
    return (
        <div className={style.container}>
            <div className={style.kiste}>
                <div className={style.schraube} />
            </div>
        </div>
    )
}

export default Kiste;