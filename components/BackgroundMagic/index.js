import React from 'react';
import style from './style.module.less';
import Section from 'components/Section';

export default class Background extends React.Component {
    constructor(props) {
        super(props);
        this.boundScroll = this.onScroll.bind(this)
    }

    render() {
        return (
            <div className={style.container}
                    ref={(c) => this.containerEl = c}>
                <div className={style.water}
                    ref={(c) => this.waterEl = c} />
            </div>
        )
    }

    onScroll() {
        this.waterEl.style.transform = 'translate3d(0,' + (window.scrollY / 2) +'px, 0)';
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