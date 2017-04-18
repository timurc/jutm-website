import React from 'react';
import style from './style.module.less';
import SVGinline from 'components/SVGinline';
import logo from '!svg-inline-loader!graphics/logo.svg';
import { map } from 'lodash';
import Kiste from 'components/Kiste';
import SetInnerHTML from 'components/SetInnerHTML'

import fisch from 'graphics/illustrations/fisch1.png'

const IMG_URL = 'graphics/illustrations/'

export default class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.boundScroll = this.onScroll.bind(this);
        this.state = {
            scroll: this.getScrollPosition()
        };
    }
    render() {
        const { children, fishes } = this.props;

        return (
            <div ref={(c) => this.containerEl = c}
                    className={style.container}>
                <section className={style.top}>
                    <div className={style.inner}>
                        <SVGinline svg={logo} 
                            className={style.logo} />
                        { children }
                    </div>
                </section>
                { map(fishes, (fish, idx) => {
                        return (
                            <Fish fish={fish}
                                key={idx} />
                        )
                    })
                }
                <div className={style.kiste}>
                    <Kiste />
                </div>
            </div>
        )
    }

    onScroll() {
        const scrollPosition = this.getScrollPosition();
    }

    getScrollPosition() {
        return typeof window === 'undefined' ? 0 : window.scrollY;
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.boundScroll);
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.boundScroll);
        }
    }
}

function Fish ({ fish }) {
    const url = require('graphics/illustrations/' + fish.image)
    const fishStyle = { backgroundImage: 'url(' + url + ')' };
    return (
        <div className={style.fish}>
            <div className={style.fish_container}>
                <div className={style.fish_image} style={fishStyle} />
                <div className={style.fish_description}>
                    {fish.title}
                    <SetInnerHTML body={fish.body} />
                </div>
            </div>
        </div>
    )
}