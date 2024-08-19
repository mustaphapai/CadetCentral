import image from '../../../assets/img3.jpg'
import './posts.css'
 const ImageCard = () => {
  return (
    <div className="imagecard">
      <img className="image"  src={image}/>
    </div>
  )
}

export default ImageCard;