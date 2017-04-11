import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Background from 'components/Background'
import Intro from 'components/Intro'
import SetInnerHTML from 'components/SetInnerHTML'
import Section from 'components/Section'
import intro from './_texte/intro.md'
import ponyhof from './_texte/ponyhof.md'

export default function Index({ route }) {
    return (
        <div>
            <Helmet
                title={config.siteTitle}
                meta={[
                    { "name": "description", "content": config.siteTitle }
                ]}
            />
            <Background />
            <Intro title={intro.title}>
                Auf der Suche nach den Tränen der Meerjungfrauen
            </Intro>
            <Section title={ponyhof.title}>
                <SetInnerHTML body={ponyhof.body} />
            </Section>
        </div>
    )
}
