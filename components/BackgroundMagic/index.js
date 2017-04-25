import React from 'react';
import style from './style.module.less';
import Section from 'components/Section';
import classNames from 'classnames';

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
            transform: 'translate3d(0,' + (this.state.scroll / -2) +'px, 0)'
        }
        const noJs = typeof window === 'undefined';

        return (
            <div className={classNames(
                        style.container, 
                        {[style.container__noJs]: noJs}
                    )}
                    ref={(c) => this.containerEl = c}>
                <div className={style.water}
                    style={waterStyle}
                    ref={(c) => this.waterEl = c} />
            </div>
        )
    }

    onScroll() {
        const scrollPosition = this.getScrollPosition();
        const threashold = window.innerHeight * 3 + 20;
        
        if (threashold > scrollPosition) {
            this.setState({
                scroll: scrollPosition
            });
        } else if (this.state.scroll !== threashold) {
            this.setState({
                scroll: threashold
            });
        }
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