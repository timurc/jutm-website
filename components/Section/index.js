import React from 'react';
import style from './style.module.less';
import classNames from 'classnames'

function Section ({ children, title, className }) {
    return (
        <section className={classNames(style.container, className)}>
            <div className={style.inner}>
                { !!title && <h1>{ title }</h1> }
                { children }
            </div>
        </section>
    )

}

export default Section;