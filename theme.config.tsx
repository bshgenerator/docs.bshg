import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import {BugIcon, FeedbackIcon, GitHubIcon, Logo, SupportIcon} from "./icons";
import Main from './components/main/Main';

const config: DocsThemeConfig = {
    banner: {
        key: 'explore-bshg-service',
        dismissible: false,
        text: (
            <>
                <div className="custom-banner">
                    Explore our exciting service <a
                    href="https://www.bshgen.com" target="_blank"
                    className="nx-text-primary-600">
                    BSH.G Tool
                </a>
                </div>
            </>
        )
    },
    logo: Logo,
    project: {link: 'https://github.com/bshgenerator', icon: <small title='On Github'><GitHubIcon/></small>},
    navbar: {
        extraContent: (
            <div style={{display: 'flex', gap: '1rem'}}>
                <a href="mailto:bsh.generator@gmail.com" title="Contact Support"><SupportIcon/></a>
                <a href="https://www.linkedin.com/company/bshg" title="Send Feedback" target="_blank"
                   rel="noopener noreferrer"><FeedbackIcon/></a>
            </div>
        ),
    },
    footer: {
        text: (
            <>
            <span>
                © {new Date().getFullYear()} | Licensed under MIT. Crafted with care by
                <a href="https://www.bshgen.com" target="_blank" className="nx-text-primary-600">
                    BSH.G Code Generator</a>. Founded by
                <a href="https://www.linkedin.com/in/bousalih-hamza/" target="_blank" className="nx-text-primary-600">
                    Bousalih Hamza</a>.
            </span>
            </>
        ),
    }
    ,
    // primaryHue: {
    //     dark: 121,
    //     light: 242
    // },
    editLink: {component: () => null},
    feedback: {
        content: <><small style={
            {display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontSize: 12}
        }><BugIcon width={16}/> Send Issue</small></>,
        labels: "bug",
        useLink: (...args) => {
            return "https://github.com/bshgenerator/docs.bshg/issues/new?labels=bug"
        }
    },
    head: (<>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="title" content="BSH.G | Docs"/>
        <meta name="description"
              content="BSH.G is a streamlined Software Projects Generation Tool that empowers you to launch projects faster and more efficiently giving you more time to focus on what truly matters: building exceptional software."/>
        <link rel="icon" href="/favicon.ico"/>
    </>),
    useNextSeoProps() {
        return {
            defaultTitle: 'BSH.G Docs',
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
    main: ({children}) => <Main>{children}</Main>,
    toc: {
        float: true,
        title: undefined,
        backToTop: true
    }
}

export default config
