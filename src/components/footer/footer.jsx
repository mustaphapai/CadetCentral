import './footer.css'
import logo from '../../assets/logo2.png'
import whatsapp from '../../assets/whatsapp.png'
import tg from '../../assets/tglogo.png'
const FooterSection = () => {
  return (
   <section className='footer'>
    <div className="copyright">
    <p className='footerTitle'> cadetCentral copyright 2024 , </p>
    <img src={logo} height={60} width={65}></img>
    

    </div>
    <div className="socials">
    <img className='item' src={whatsapp} height={40} width={40}></img>
    <img className='item' src={tg} height={36} width={36}></img>

    </div>
   </section>
  )
}

export default FooterSection