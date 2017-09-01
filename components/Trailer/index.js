import React from 'react';
import style from './style.module.less';

function Pictures() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <iframe
                    className={style.iframe}
                    src="https://www.youtube.com/embed/TP5PAYMXk2o"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default Pictures;
