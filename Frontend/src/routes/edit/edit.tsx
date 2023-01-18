import { useCallback, useState, MouseEvent, useEffect } from "react";
import Button from "../../components/button/button";
import Content from "../../components/content/content"
import Hero from "../../components/hero/hero"
import TextInput from "../../components/input/input";
import { Link, useNavigate, useSearchParams  } from "react-router-dom"
import API_URL from "../../utils/api/api";
import kioskProps from "../../utils/interfaces/kiosk";
import ErrorToast from "../../components/toast/toast";
import { useToast } from "../../context/toastContext";

const Edit = () => {
    const navigate = useNavigate();
    const [kiosk, setKiosk] = useState<kioskProps>();
    const [id, setId] = useState<String>();
    const [serialKey, setSerialKey] = useState<String>();
    const [desc, setDesc] = useState<String>();
    const [opensAt, setOpensAt] = useState<string>();
    const [closesAt, setClosesAt] = useState<string>();
    const {setMessage, setIsShowing} = useToast();
    let [query] = useSearchParams();
    const KioskId = query.get('id');

    useEffect(() => {
        try {
            fetch(API_URL+'/api/kiosks')
            .then(async res => {
                if (!(res.ok || res.status === 200)) {
                    setMessage((await res.json()).message);
                    setIsShowing(true);
                    setTimeout(()=>{setIsShowing(false)},5000);
                    return;
                } 
                res.json()
                .then(data => {
                    data.kiosks.forEach( (kiosk: kioskProps) => {
                        if (kiosk.id === KioskId) {
                            setId(kiosk.id);
                            setSerialKey(kiosk.serialKey);
                            setDesc(kiosk.description);
                            setOpensAt((new Date(kiosk.storeOpensAt).toLocaleTimeString('en-au', {hour: '2-digit', minute:'2-digit'})).split(' ')[0]);
                            setClosesAt((new Date(kiosk.storeOpensAt).toLocaleTimeString('en-au', {hour: '2-digit', minute:'2-digit'})).split(' ')[0]);
                        };
                    })
                })
            })
        } catch (err) {
            console.error(err);
        }
    }, [])
    
    console.log(kiosk)

    const handleEdit = useCallback((event: MouseEvent) => {
        console.log('EDIT!!!')
        try {
            fetch(API_URL+'/api/kiosks', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    serialKey: serialKey,
                    description: desc,
                    storeOpensAt: new Date('10-OCT-2000 '+ opensAt),
                    storeClosesAt: new Date('10-OCT-2000 '+ closesAt)
                })
            })
            .then(async res => {
                if (!(res.ok || res.status === 200)) {
                    setMessage((await res.json()).message);
                    setIsShowing(true);
                    setTimeout(()=>{setIsShowing(false)},5000);
                    return;
                } 
                navigate('/');
            })
        } catch (err) {
            console.log(err)
        }
    }, [id, serialKey, desc, opensAt, closesAt])

    return (
        <section id='Body' className='min-h-screen min-w-full bg-slate-50 dark:bg-gray-900 absolute inset-0'>
            <Hero/>
            <Content>
            <h1 className="font-bold text-xl text-slate-500 dark:text-slate-400">Kiosk editor</h1>
            <div className="relative rounded-xl overflow-auto border dark:border-slate-600 bg-slate-100 dark:bg-slate-900 flex flex-col w-96">
                <form className="flex flex-col gap-4 px-8 p-6">
                    <TextInput id="Id" type="text" placeholder="Kiosk id" state={{value:id, setState:setId}} disabled={true}/>
                    <TextInput id="SerialKey" type="text" placeholder="Serial key" state={{value:serialKey, setState:setSerialKey}}/>
                    <TextInput id="Description" type="text" placeholder="Description" state={{value:desc, setState:setDesc}}/>
                    <TextInput id="Description" type="time" placeholder="Opens at" state={{value:opensAt, setState:setOpensAt}}/>
                    <TextInput id="Description" type="time" placeholder="Closes at" state={{value:closesAt, setState:setClosesAt}}/>
                </form>
            </div>
            <div className="flex justify-between w-full md:w-96">
                <Link to='/'>
                    <Button>
                        <span>Cancel</span>
                    </Button>
                </Link>
                <div onClick={handleEdit}>
                    <Button>
                        <span>Edit kiosk</span>
                    </Button>
                </div>
            </div>
          </Content>
        </section>
    )
}

export default Edit;