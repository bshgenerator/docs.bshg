import {GitHubIcon, LinkedInIcon} from '../../icons'
import authors from './authors'

type AuthorType = {
    author: keyof typeof authors,

}

export const BlogAuthor = (
    {author}: AuthorType
) => {
    const authorDetails = authors[author]

    return (
        <div style={{marginTop: 10}}>
            <div className='nx-flex nx-gap-2'>
                <div style={{
                    borderRadius: '50%',
                    width: 40,
                    maxWidth: 40,
                    height: 40,
                    maxHeight: 40,
                    overflow: 'hidden'
                }}>
                    <img src={authorDetails.avatar} alt='author avatar'/>
                </div>
                <div className='nx-flex' style={{flexDirection: 'column'}}>
                    <span style={{fontWeight: 500}}>{authorDetails.fullname}</span>
                    <span><i style={{fontSize: 12}}>{authorDetails.description}</i></span>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: 15, gap: 10}}>
                <a href={authorDetails.links.github} target='_blank'><GitHubIcon/></a>
                <a href={authorDetails.links.in} target='_blank'><LinkedInIcon/></a>
            </div>
        </div>
    )
}