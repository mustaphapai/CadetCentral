import img1 from '../../assets/img1.jpg';
import './deptview.css'
 const ViewDept = () => {

const DeptImg = ()=>{

    return(<div className='imgDiv'>
        <img src={img1} className='DeptImg'/>
    </div>)
}

const DeptName = () =>{

    return(
        <div className='nameDiv'>
<h3 className='nameText'>History Bites</h3>
        </div>
    )
}

const DeptDescription = () =>{

    return (
        <div className='descriptionDiv'>
            <p className="descriptionText"></p>
        </div>
    )
}





  return (
    <div className="background">
<DeptImg/>
<DeptName/>
<DeptDescription/>


    </div>
  )
}
export default ViewDept;