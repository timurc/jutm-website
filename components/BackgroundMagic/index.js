import React from 'react';
import style from './style.module.less';
import Section from 'components/Section';

export default class Background extends React.Component {
    constructor(props) {
        super(props);
        this.boundScroll = this.onScroll.bind(this);
        this.state = {
            scroll: this.getScrollPosition()
        };
    }

    render() {
        const waterStyle = {
            transform: 'translate3d(0,' + (this.state.scroll / 2) +'px, 0)'
        }
        return (
            <div className={style.container}
                    ref={(c) => this.containerEl = c}>
                <div className={style.water}
                    style={waterStyle}
                    ref={(c) => this.waterEl = c} />
            </div>
        )
    }

    onScroll() {
        const scrollPosition = this.getScrollPosition();

        if (this.shouldTransform(scrollPosition)) {
            this.setState({
                scroll: this.getScrollPosition()
            })
        }
    }

    getScrollPosition() {
        return typeof window === 'undefined' ? 0 : window.scrollY;
    }

    shouldTransform(scrollPosition) {
        return this.waterEl.getBoundingClientRect().top > 0;
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