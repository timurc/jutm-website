import React from 'react';
import style from './style.module.less';
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

export default class Background extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={style.container}>
                huuu
            </div>
        )
    }
}