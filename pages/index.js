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
                    { "name": "description", "content": config.siteTitle }
                ]}
            />
            <h1>
                Hello World!
      </h1>
            <p>Welcome to your old clean Gatsby site</p>
        </div>
    )
}
