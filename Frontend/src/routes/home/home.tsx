import Content from "../../components/content/content"
import Hero from "../../components/hero/hero"
import KiosksTable from "../../components/kiosktable/kiosktable"
import Button from "../../components/button/button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import API_URL from "../../utils/api/api"
import { useToast } from "../../context/toastContext"

const Home = () => {
    const [kiosks, setKiosks] = useState<any>();
    const {setMessage, setIsShowing} = useToast();

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
                    setKiosks(data);
                })
            })
        } catch (err) {
            console.error(err);
        }
    }, [])
    

    return (
        <section id='Body' className='min-h-screen min-w-full bg-slate-50 dark:bg-gray-900 absolute inset-0'>
            <Hero/>
            <Content>
                <Link to='/Create'>
                    <Button>
                        <span>Add kiosk</span>
                    </Button>
                </Link>
                <KiosksTable {...kiosks}/>
            </Content>
        </section>
    )
}

export default Home;