export const PageLink = ( props: { pageName: string, pageIcon: any, linkUrl: string } ) => {
    return (
        <a className={ ( location.pathname === props.linkUrl ? 'bg-white hover:bg-white shadow-md p-2 ' : 'px-2  hover:bg-slate-100 ' ) + 'rounded-lg flex gap-2 p-2 focus:bg-emerald-600 transition duration-150' }>
            <span>{props.pageIcon}</span>
            <span>{props.pageName}</span>
        </a>
    )
}