import './navbar.css';
import { AvatarGenerator } from 'random-avatar-generator';

const Navbar = () => {
    const generator = new AvatarGenerator();
  return (
    <div className="navbar">
<p className="logoTitle">cadetCentral</p>
<img src={generator.generateRandomAvatar()} width={28} height={28}/>

    </div>
  )
}

export default Navbar;