export type Author = {
    fullname: string
    description: string
    avatar: string
    links: {
        github: string
        in: string
    }
}

export type Authors = Record<string, Author>

export default {
    bousalih: {
        fullname: 'Bousalih Hamza',
        description: 'BSH.G Founder | Software Developer',
        avatar: '/avatar/hamza_bousalih.avatar.jpg',
        links: {
            github: 'https://github.com/hamza-bousalih',
            in: 'https://www.linkedin.com/in/hamza-bousalih'
        }
    }
} as Authors