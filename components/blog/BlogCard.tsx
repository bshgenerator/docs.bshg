
export const BlogCard = ({image, href, title}) => {
    return (
        <a className="nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200 nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 hover:nx-border-gray-300 nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 hover:nx-shadow-lg dark:hover:nx-border-neutral-500 dark:hover:nx-bg-neutral-700"
           href={href}>
            <img alt="Documentation theme" loading="lazy" width="2800" height="1574"
                 decoding="async" data-nimg="1" style={{color: 'transparent'}}
                 src={image}/>
            <span className="nx-flex nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700 hover:nx-text-gray-900 dark:nx-text-gray-300 dark:hover:nx-text-gray-100">
                <span className="nx-flex nx-gap-1">{title}
                   <span className="nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]">→</span>
                </span>
            </span>
        </a>
    )
}