import "./navbar.scss"
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>Young Media</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
             </div>
             <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search..." />
             </div>
            <div className="right">
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationImportantOutlinedIcon/>
                <div className="user">
                    <img src="https://images.pexels.com/photos/1261815/pexels-photo-1261815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span>Ali Mert Yılmazz</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;