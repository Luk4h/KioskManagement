import KioskRow from "./kioskrow"

const KiosksTable = (props: {kiosks: any[]}) => {

    return (
        <section id="KiosksTable" className="flex justify-between w-full">
            <div className="relative rounded-xl overflow-auto border dark:border-slate-600 bg-slate-100 dark:bg-slate-900 w-full">
                <div className="shadow-sm overflow-x-scroll my-3 md:overflow-hidden">
                    <table className="table-fixed text-sm w-max md:w-full">
                    <thead className=" bg-slate-100 dark:bg-slate-900 text-bold ">
                        <tr>
                        <th className="border-b break-normal dark:bg-slate-900 dark:border-slate-600 bg-slate-100 p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Id</th>
                        <th className="border-b break-normal dark:bg-slate-900 dark:border-slate-600 bg-slate-100 p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Serial key</th>
                        <th className="border-b break-normal dark:bg-slate-900 dark:border-slate-600 bg-slate-100 p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Description</th>
                        <th className="border-b break-normal dark:bg-slate-900 dark:border-slate-600 bg-slate-100 p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Status</th>
                        <th className="border-b break-normal dark:bg-slate-900 dark:border-slate-600 bg-slate-100 p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Opens at</th>
                        <th className="border-b break-normal dark:bg-slate-900 dark:border-slate-600 bg-slate-100 p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Closes at</th>
                        <th className="border-b break-normal dark:bg-slate-900 dark:border-slate-600 bg-slate-100 p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800">
                        { props.kiosks && props.kiosks.map(kiosk => <KioskRow kiosk={kiosk}/>) }
                    </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default KiosksTable