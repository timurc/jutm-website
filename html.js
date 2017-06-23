import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
require('file?name=.htaccess!./.htaccess')

const BUILD_TIME = new Date().getTime()

const propTypes = {
    body: React.PropTypes.string
}

export default function HTML ({ body }) {
    const head = Helmet.rewind();
    const piwikSetup = buildPiwikSetup();

    let css
    if (process.env.NODE_ENV === 'production') {
        css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="shortcut icon" href="/favicon.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {head.title.toComponent()}
                {head.meta.toComponent()}
                {css}
                { process.env.NODE_ENV === 'production' ? piwikSetup : null }
            </head>
            <body>
                <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
                <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
            </body>
        </html>
    )
}

function buildPiwikSetup() {
    const js = `
        var _paq = _paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u="https://www.wissenschaft-im-dialog.de/piwik/";
            _paq.push(['setTrackerUrl', u+'piwik.php']);
            _paq.push(['setSiteId', '16']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
        })();
    `;

    return <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: js }}
        />;
}

HTML.propTypes = propTypes;