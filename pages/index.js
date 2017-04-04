import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default function Index() {
    return (
        <div>
            <Helmet
                title={config.siteTitle}
                meta={[
                    { "name": "description", "content": "Sample" },
                    { "name": "keywords", "content": "sample, something" },
                ]}
            />
            <h1>
                Hello World!
      </h1>
            <p>Welcome to your old clean Gatsby site</p>
        </div>
    )
}
