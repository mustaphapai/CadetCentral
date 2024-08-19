import './deptview.css'
import DeptViewCard from './deptViewCard'


const DeptViewer = () => {

  return (
    <div className="titleblock">
    <h3 className="libTitle1">
      Explore departments
     </h3>
<div className="deptViewer">
<DeptViewCard  deptName='Forensic Sci.🔍 '/>
<DeptViewCard deptName='Biology 🦠'/>
<DeptViewCard  deptName='Computer Sci.💾'/>
  <DeptViewCard  deptName='Chemistry ⚗️ ⌬'/>
  
  <DeptViewCard  deptName='Physics ⚙️'/>

  <DeptViewCard  deptName='Maths🧮'/>

  <DeptViewCard   deptName='Bch 🧬'/>

  <DeptViewCard  deptName='Law ⚖️'/>
  
  <DeptViewCard  deptName='History & intl 📜'/>

<DeptViewCard  deptName='Sociology 📚'/>

<DeptViewCard deptName='Mgt Sci. 💱'/>
<DeptViewCard  deptName='Pol Sci. 📒'/>

<DeptViewCard  deptName='Accounting 🖩💵'/>

<DeptViewCard  deptName='English 🏰'/>



  </div> </div>
  )
}
export  default DeptViewer