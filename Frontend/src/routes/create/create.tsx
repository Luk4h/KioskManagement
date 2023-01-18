import { useState } from "react";
import Button from "../../components/button/button";
import Content from "../../components/content/content"
import Hero from "../../components/hero/hero"
import TextInput from "../../components/input/input";
import { Link } from "react-router-dom"

const Create = () => {
    const [id, setId] = useState<string>('');
    const [serialKey, setSerialKey] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [opensAt, setOpensAt] = useState<string>('09:00');
    const [closesAt, setClosesAt] = useState<string>('20:00');

    return (
        <section id='Body' className='min-h-screen min-w-full bg-slate-50 dark:bg-gray-900'>
          <Hero/>
          <Content>
            <h1 className="font-bold text-xl text-slate-500 dark:text-slate-400">Kiosk creator</h1>
            <div className="relative rounded-xl overflow-auto border dark:border-slate-600 bg-slate-100 dark:bg-slate-900 flex flex-col w-96">
                <form className="flex flex-col gap-4 px-8 p-6">
                    <TextInput id="Id" type="text" placeholder="Kiosk id" state={{value:id, setState:setId}}/>
                    <TextInput id="SerialKey" type="text" placeholder="Serial key" state={{value:serialKey, setState:setSerialKey}}/>
                    <TextInput id="Description" type="text" placeholder="Description" state={{value:desc, setState:setDesc}}/>
                    <TextInput id="Description" type="time" placeholder="Opens at" state={{value:opensAt, setState:setOpensAt}}/>
                    <TextInput id="Description" type="time" placeholder="Closes at" state={{value:closesAt, setState:setClosesAt}}/>
                </form>
            </div>
            <div className="flex justify-between w-full md:w-96">
                <div onClick={(e) => {console.log(e)}}>
                    <Button>
                        <span>Cancel</span>
                    </Button>
                </div>
                <Link to='/'>
                    <Button>
                        <span>Create kiosk</span>
                    </Button>
                </Link>
            </div>
          </Content>
        </section>
    )
}

export default Create;