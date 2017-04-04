import React from 'react';
import style from './style.module.less';

function Intro ({ children }) {
    return (
        <section className={style.container}>
            { children }
        </section>
    )

}

export default Intro;