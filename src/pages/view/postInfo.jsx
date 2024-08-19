import './view.css'
import { AvatarGenerator } from 'random-avatar-generator';

 const PostInfoView = () => {
  const generator = new AvatarGenerator();
  return (
    <div className="viewpostInfo">
     
      <p className="viewpostBy">cicada33 <span><img src={generator.generateRandomAvatar()} width={23} height={23}/> </span> <span className="viewpageName">@ Myths&might</span></p>
     
      
      <p className="viewdate">20-02-24 | 12:30pm</p>
    </div>
  )
}
export default PostInfoView;