import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom'

const DeptViewCard = ({ deptName }) => {
  const nav = useNavigate()
  return (
    <div className="deptgrid" onClick={()=>{nav('/viewDept')}}>
     <div className="deptItem">
     <p>{deptName}</p>
     </div>
        </div>
  );
}

DeptViewCard.propTypes = {
  deptName: PropTypes.string.isRequired,
};

export default DeptViewCard;
