import React from 'react'
import Helmet from "react-helmet"
import { config } from 'config'

const propTypes = {
    router: React.PropTypes.object,
}

export default function MarkdownWrapper({ route }) {
    const post = route.page.data
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
}

MarkdownWrapper.propTypes = propTypes;