import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import BackgroundMagic from 'components/BackgroundMagic'
import Intro from 'components/Intro'
import SetInnerHTML from 'components/SetInnerHTML'
import Section from 'components/Section'
import theaterstuck from './_texte/theaterstuck.md'
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
            <Intro fishes={fishes}>
                Komm mit auf eine wagemutige Expedition
            </Intro>
            <span id="beschreibung" />
            <Section title={theaterstuck.title}>
                <SetInnerHTML body={theaterstuck.body} />
            </Section>
        </div>
    )
}
