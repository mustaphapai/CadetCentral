import './library.css'
import { AvatarGenerator } from 'random-avatar-generator';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
 const Uploads = () => {
    const generator = new AvatarGenerator();

const UploadCard = ()=>{
    return (<div className='uploadCard'>
       <div className="titleDiv"> 
        <DescriptionOutlinedIcon fontSize='large' sx={{height:'60px',}}/>
        <h3 className="uploadName">Nucleic Acid</h3></div>
        <p className="uploadDept">Biochemistry</p>
        <p className="uploadCode">Bch303</p>
        <p className="uploadDate">2023-04-02</p>
        <div className="uploadInfo">
           <div className='uploadedByDiv'> <p className="uploadedBy">Uploaded by</p>
           <img src={generator.generateRandomAvatar()} width={23} height={24}/></div>
           <div>
            <button className='viewBtn'>
                View document
            </button>
           </div>
        </div>

    </div>)
}



  return (
    <div className='depts'>
 <h3 className="deptTitle">
          Uploads
        </h3>
        <UploadCard/>
        <UploadCard/>
        <UploadCard/>
        <UploadCard/>
    </div>
  )
}
export default Uploads;