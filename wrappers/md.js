import React from 'react'
import Helmet from "react-helmet"
import { config } from 'config'
import { Link } from 'react-router'
import Section from 'components/Section'
import JUTMlogo from 'components/JUTMlogo'
import style from './style.module.less'

const propTypes = {
    router: React.PropTypes.object,
}

export default function MarkdownWrapper({ route }) {
    const post = route.page.data
    return (
        <div>
            <JUTMlogo className={style.jutm_logo}/>
            
            <div className={style.container}>
                <Helmet
                    title={`${config.siteTitle} | ${post.title}`}
                />
                <Section>
                    <h1 className={style.heading}>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </Section>
            </div>
        </div>
    )
}

MarkdownWrapper.propTypes = propTypes;