import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default function Template({ children }) {
    return (
        <div>
            <Link to={prefixLink('/')}>
                Link home...
            </Link>
            {children}
        </div>
    )
}
