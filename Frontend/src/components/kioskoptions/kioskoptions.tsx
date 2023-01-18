import { PageLink } from "../hero/pageLink"

export const KioskOptions = () => {

    return (
        <section id="KioskOptions" className="font-body w-full border-b px-16 h-20 flex items-center">
            <div className="flex justify-start p-1 my-2 gap-2 bg-slate-200 w-fit rounded-lg items-center">
                <PageLink  pageName='New' pageIcon='🆕' linkUrl='/New'/>
                <PageLink  pageName='Kiosks' pageIcon='🏪' linkUrl='/'/>
                <PageLink  pageName='Edit' pageIcon='✏️' linkUrl='/Edit'/>
            </div>
        </section>
    )
}