import React from 'react';
import style from './style.module.less';

export default class ArchiveHint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
    }

    render() {
        if (this.state.display) {
            return (
                <div className={style.container}>
                    <h1># ARCHIV</h1>
                    Diese Seite ist von völlig ohne archiviert und wird gegenwärtig nicht mehr von Wissenschaft im
                    Dialog betrieben. Mehr Informationen über die Gestaltung des Projekts{' '}
                    <a href="https://volligohne.de/projekte/jona/">hier</a>.
                    <button
                        onClick={() => {
                            this.setState({ display: false });
                        }}
                        className={style.button}
                    >
                        AUSBLENDEN
                    </button>
                </div>
            );
        }
        return null;
    }
}
