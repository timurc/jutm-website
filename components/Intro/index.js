import React from 'react';
import style from './style.module.less';
import SVGinline from 'components/SVGinline';
import logo from '!svg-inline-loader!graphics/logo.svg';

function Intro ({ children }) {
    return (        
        <section className={style.container}>
            <div className={style.inner}>
                <SVGinline svg={logo} 
                    className={style.logo} />
                { children }
            </div>
        </section>
    )

}

export default Intro;