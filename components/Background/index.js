import React from 'react';
import style from './style.module.less';
import Section from 'components/Section';
import {Track, TrackedDiv, TrackDocument} from 'react-track';
import {tween, combine} from 'react-imation';
import {topTop,
        topBottom,
        centerCenter,
        topCenter,
        bottomBottom,
        bottomTop,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from 'react-track/tracking-formulas';
import {rgb, rgba, scale, rotate,
        px, percent, translate3d} from 'react-imation/tween-value-factories';

export default class Background extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY,
                               topTop, topBottom, topCenter, centerCenter, bottomBottom,
                               bottomTop]}>
                {(documentElement, documentRect, scrollY, topTop,
                topBottom, topCenter, centerCenter, bottomBottom, bottomTop) =>
                    <Track component="div" 
                            formulas={[topTop, bottomTop]}>
                        {(Div, posTopBottom, posBottomTop) => {
                            return (
                                <Div  className={style.container}>
                                    <div style={tween(scrollY, [
                                        [[posTopBottom], {transform: translate3d(0,0,0)}],
                                        [[posBottomTop], {transform: translate3d(0,500,0)}]
                                    ])} 
                                    className={style.water} />
                                </Div>
                            )
                        }
                        }                 
                    </Track>
                }
            </TrackDocument>
        )
    }
}