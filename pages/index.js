import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Background from 'components/Background'
import BackgroundMagic from 'components/BackgroundMagic'
import Intro from 'components/Intro'
import SetInnerHTML from 'components/SetInnerHTML'
import Section from 'components/Section'
import intro from './_texte/intro.md'
import ponyhof from './_texte/ponyhof.md'
import { filter, map } from 'lodash'

export default function Index({ route }) {
    const fishes = map(filter(route.pages, (page) => {
        return page.path.indexOf('/_fische') === 0;
    }), (page) => page.data);

    return (
        <div>
            <Helmet
                title={config.siteTitle}
                meta={[
                    { "name": "description", "content": config.siteTitle }
                ]}
            />
            <BackgroundMagic />
            <Intro title={intro.title}
                    fishes={fishes}>
                Komm mit auf eine wagemutige Expedition
            </Intro>
            <Section title={ponyhof.title}>
                <SetInnerHTML body={ponyhof.body} />
            </Section>
        </div>
    )
}
