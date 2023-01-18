import Content from "../../components/content/content"
import Hero from "../../components/hero/hero"
import KiosksTable from "../../components/kiosktable/kiosktable"
import Button from "../../components/button/button"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <section id='Body' className='min-h-screen min-w-full bg-slate-50 dark:bg-gray-900'>
          <Hero/>
          <Content>
            <Link to='/Create'>
                <Button>
                    <span>Add kiosk</span>
                </Button>
            </Link>
            <KiosksTable/>
          </Content>
        </section>
    )
}

export default Home;