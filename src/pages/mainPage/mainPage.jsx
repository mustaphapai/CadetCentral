
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './mainPage.css';
import Library from '../../pages/Library/library';
import Feed from '../../pages/Feed/feed';
import Market from '../../pages/Market/market';
import Navbar from '../../components/navbar/navbar'
import { useState } from 'react';
import Page from '../page/page';
import {useNavigate} from 'react-router-dom'

const MainPage = () => {
  const [value, setValue] = useState('1');
  const nav = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabBox = () => (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 3, borderColor: 'divider', color: 'white', position: 'fixed', top: '56px', width: '100%', zIndex: 1, backgroundColor: 'rgb(0, 0, 23)' }}>
          <TabList onChange={handleChange} variant='scrollable' aria-label="lab API tabs example">
            <Tab label="Home" value="1" sx={{ color: 'rgb(75, 75, 76)', height: '31px', width: '30px', fontSize: '13px', fontFamily: "Inter", fontWeight: 700 }} />
            <Tab label="Library" value="2" sx={{ color: 'rgb(75, 75, 76)', height: '41px', width: '41px', fontSize: '13px', fontFamily: "Inter", fontWeight: 700 }} />
            <Tab label="Pages" value="3" sx={{ color: 'rgb(75, 75, 76)', height: '41px', width: '41px', fontSize: '13px', fontFamily: "Inter", fontWeight: 700 }} />
            <Tab label="Market" value="4" sx={{ color: 'rgb(75, 75, 76)', height: '41px', width: '41px', fontSize: '13px', fontFamily: "Inter", fontWeight: 700 }} />
          </TabList>
        </Box>
        <TabPanel value="1"><Feed /></TabPanel>
        <TabPanel value="2"><Library /></TabPanel>
        <TabPanel value="3"><Page /></TabPanel>
        <TabPanel value="4"><Market /></TabPanel>
      </TabContext>
    </Box>
  );

  return (
    <div className='mainpage'>
      <Navbar />
      <div className="content">
        <TabBox />
        <Fab  onClick={()=>{nav('/upload')}} color="primary" aria-label="add" sx={{ margin: '9px', height: '63px', width: '63px', position: 'fixed', bottom: 16, right: 16, backgroundColor: '#0576F8', '&:hover': { backgroundColor: '#053173' } }}>
          <AddIcon sx={{ height: "31px", width: "31px" , color: '#CBDDF1'}} />
        </Fab>
       
      </div>
    </div>
  );
};

export default MainPage;
