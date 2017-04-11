import React from 'react'

function SVGinline ({ svg, className }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: svg }}
            className={className} />
    )
}

export default SVGinline;