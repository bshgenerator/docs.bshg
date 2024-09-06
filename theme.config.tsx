import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import {BugIcon, FeedbackIcon, GitHubIcon, Logo, SupportIcon} from "./icons";
import Main from './components/main/Main';

const config: DocsThemeConfig = {
    banner: {
        key: 'This website is in progress, you can read the docs from old one',
        text: (<>
            This website is in progress, you can read the docs from old one
            <a href="https://bshg-validation-docs.onrender.com/docs/intro" target="_blank">
                from Here →
            </a>
        </>)
    },
    logo: Logo,
    project: {link: 'https://github.com/bsh-generator', icon: <small title='On Github'><GitHubIcon/></small>},
    footer: {
        text: <>
        <span>
        MIT {new Date().getFullYear()} ©{' '}
            <a href="https://github.com/bsh-generator" target="_blank">
          BSH.G Code Generator
        </a>
        .
      </span>
        </>
    },
    // primaryHue: {
    //     dark: 121,
    //     light: 242
    // },
    editLink: {component: () => null},
    feedback: {
        content: <><small style={
            {display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontSize: 12}
        }><BugIcon width={16}/> Send Issue</small></>,
        labels: "enhancement",
        useLink: (...args) => {
            return "https://github.com/bsh-generator/bshg_validation_ts/issues"
        }
    },
    head: (<>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="title" content="BSH.G Docs"/>
        <meta name="description"
              content="Welcome to @bshg/validation, a versatile TypeScript library crafted for seamless data validation within your projects. Whether you're working on a front-end or back-end application, this library empowers you to validate data in a declarative manner, ensuring your objects align with your expectations."/>
        <link rel="icon" href="/favicon.ico"/>
    </>),
    useNextSeoProps() {
        return {
            defaultTitle: 'BSH.G Code Generator',
            titleTemplate: 'BSH.G | %s'
        }
    },
    darkMode: true,
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
        titleComponent: ({title, type, route}) => {
            return <>{title}</>
        },
    },
    navbar: {
        extraContent: (
            <div style={{display: 'flex', gap: '1rem'}}>
                <a href="mailto:support@yourdomain.com" title="Contact Support"><SupportIcon/></a>
                <a href="https://yourfeedbackform.com" title="Send Feedback" target="_blank"
                   rel="noopener noreferrer"><FeedbackIcon/></a>
            </div>
        ),
    },
    main: ({children}) => <Main>{children}</Main>,
    toc: {
        float: true,
        title: undefined,
        backToTop: true
    }
}

export default config
