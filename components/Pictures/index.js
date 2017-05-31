import React from 'react';;
import style from './style.module.less';
import { map } from 'lodash';

const IMAGES = [
    require('./szene1.jpg'),
    require('./szene2.jpg'),
    require('./szene3.jpg')
]

function Pictures () {
    return (
        <div className={style.container}>
            { map(IMAGES, (image, idx) => {
                return (
                    <div className={style.image_container} key={idx}>
                        <div className={style.image_inner}>
                            <img src={image} className={style.image} />
                        </div>
                    </div>
                )
                })
            }
        </div>
    )

}

export default Pictures;