import kioskRowProps from "../../utils/interfaces/kiosk"
import { Link, useNavigate } from "react-router-dom"
import { useCallback, MouseEvent, useState } from "react"
import API_URL from "../../utils/api/api"

const KioskRow = ( props: {kiosk: kioskRowProps} ) => {
    const navigate = useNavigate();
    const [isShowing, setIsShowing] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleDelete = useCallback((e: MouseEvent) => {
        const payload = {id:props.kiosk.id};
        console.log(JSON.stringify(payload))

        try {
            fetch(API_URL+'/api/kiosks', {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            .then(async res => {
                if (!(res.ok || res.status === 200)) {
                    setMessage((await res.json()).message);
                    setIsShowing(true);
                    setTimeout(()=>{setIsShowing(false)},5000);
                    return;
                } 
                navigate(0);
            })
        } catch (err) {
            console.error(err);
        }
    }, [props])
    
    return(
    <tr>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{props.kiosk.id}</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{props.kiosk.serialKey}</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{props.kiosk.description}</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{props.kiosk.isKioskClosed ? 'Closed' : 'Open'}</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{new Date(props.kiosk.storeOpensAt).toLocaleTimeString('en-au', {hour: '2-digit', minute:'2-digit'})}</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{new Date(props.kiosk.storeClosesAt).toLocaleTimeString('en-au', {hour: '2-digit', minute:'2-digit'})}</td>
        <td className="border-b break-normal border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
            <div className="flex gap-2">
                <Link to={'/Edit?id='+props.kiosk.id} state={props.kiosk}>
                    <button className="border dark:border-slate-700 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-500 transition">✏️</button>
                </Link>
            <button onClick={handleDelete} className="border dark:border-slate-700 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-500 transition">🗑️</button>
            </div>
        </td>
    </tr>
    )
}

export default KioskRow