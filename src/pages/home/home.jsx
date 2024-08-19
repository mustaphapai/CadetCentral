import About from '../../components/about/about';
import Features from '../../components/feature/feature';
import FooterSection from '../../components/footer/footer';
import Header from '../../components/header/header'
import './home.css'
const home = () => {
  return (
    <div className='home'>
        <Header/>
        <About/>
       <Features/>
       <FooterSection/>
       
    </div>
  )
}
export  default home;