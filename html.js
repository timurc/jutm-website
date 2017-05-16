import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
require('file?name=.htaccess!./.htaccess')

const BUILD_TIME = new Date().getTime()

const propTypes = {
    body: React.PropTypes.string
}

export default function HTML ({ body }) {
    const head = Helmet.rewind()

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
            </head>
            <body>
                <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
                <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
            </body>
        </html>
    )
}

HTML.propTypes = propTypes;
