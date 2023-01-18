import kioskRowProps from "../../utils/interfaces/kiosk"

const KioskRow = ( ) => {
    
    return(
    <tr>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">1</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">0000000001</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Luiz`s Kiosk</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Open</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">09:00 AM</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">08:00 PM</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
            <div className="flex gap-2">
            <button className="border dark:border-slate-700 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-500 transition">✏️</button>
            <button className="border dark:border-slate-700 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-500 transition">🗑️</button>
            </div>
        </td>
    </tr>
    )
}

export default KioskRow