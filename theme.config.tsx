import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'

const logo = (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128">
            <g id="logo-cycle" transform="translate(-3596 4014)">
                <rect id="Rectangle_38" data-name="Rectangle 38" width="128" height="128" rx="64"
                      transform="translate(3596 -4014)" fill="#3ecc5e"/>
                <text id="BSH.G" transform="translate(3621 -3945)" fill="#fafafa" font-size="28"
                      font-family="Ubuntu-Regular, Ubuntu">
                    <tspan x="0" y="0">BSH.G</tspan>
                </text>
                <text id="Code_Generatorv" data-name="Code Generatorv" transform="translate(3618 -3932)" fill="#fafafa"
                      font-size="10" font-family="Ubuntu-Regular, Ubuntu">
                    <tspan x="0" y="0">Code Generatorv</tspan>
                </text>
                <rect id="Rectangle_38-2" data-name="Rectangle 38" width="128" height="128" rx="64"
                      transform="translate(3596 -4014)" fill="#3ecc5e"/>
                <text id="BSH.G-2" data-name="BSH.G" transform="translate(3620 -3945)" fill="#fafafa" font-size="28"
                      font-family="Ubuntu-Regular, Ubuntu">
                    <tspan x="0" y="0">BSH.G</tspan>
                </text>
                <text id="Code_Generator" data-name="Code Generator" transform="translate(3623 -3932)" fill="#fafafa"
                      font-size="10" font-family="Ubuntu-Regular, Ubuntu">
                    <tspan x="0" y="0">Code Generator</tspan>
                </text>
            </g>
        </svg>
        <span style={{marginLeft: '.4em', fontWeight: 600}}>
        BSH.G Code Generator
      </span>
    </>
)

const newsBanner = {
    // key: '2.0-release',
    // text: (
    //     <a href="https://nextra.site" target="_blank">
    //         🎉 Nextra 2.0 is released. Read more →
    //     </a>
    // )
}

const config: DocsThemeConfig = {
    logo: logo,
    project: {
        link: 'https://github.com/bsh-generator',
    },
    footer: {
        text:  (
            <span>
        MIT {new Date().getFullYear()} ©{' '}
                <a href="https://github.com/bsh-generator" target="_blank">
          BSH.G Code Generator
        </a>
        .
      </span>
        ),
    },
    primaryHue: {
        dark: 121,
        light: 242
    },
    banner: newsBanner,
    editLink: {component: null},
    feedback: {
        content: "Send Feedback",
        labels: "",
        useLink: () => "https://github.com/bsh-generator/bshg_validation_ts/issues"
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="title" content="BSH.G Docs"/>
            <meta name="description" content="Welcome to @bshg/validation, a versatile TypeScript library crafted for seamless data validation within your projects. Whether you're working on a front-end or back-end application, this library empowers you to validate data in a declarative manner, ensuring your objects align with your expectations."/>
            <link rel="icon" href="/favicon.ico"/>
        </>
    )
}

export default config
