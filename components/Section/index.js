import React from 'react';
import style from './style.module.less';

function Section ({ children, title }) {
    return (
        <section className={style.container}>
            <div className={style.inner}>
                { !!title && <h1>{ title }</h1> }
                { children }
            </div>
        </section>
    )

}

export default Section;