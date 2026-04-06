import React, { useState } from 'react'
import Logo from '../../assets/images/logo2.PNG'
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
import { BsBrightnessLow } from "react-icons/bs";
import Search from '../Search';
import { FaOpencart } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { FaUserShield } from "react-icons/fa";
import { MdPerson } from "react-icons/md";


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
    const openMyAcc = Boolean(anchorEl);
    const openNotification = Boolean(notificationsAnchorEl);

    const handleOpenAcc = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAcc = () => {
        setAnchorEl(null);
    };

    const handleOpenNotifications = (event) => {
        setNotificationsAnchorEl(event.currentTarget);
    };

    const handleCloseNotifications = () => {
        setNotificationsAnchorEl(false);
    };

    return (
        <>
            <header className='d-flex align-items-center '>
                <div className="container-fluid w-100">
                    <div className='row d-flex align-items-center w-100'>
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className='d-flex align-items-center logo ms-3'>
                                <img src={Logo} alt={Logo} />                                
                            </Link>
                        </div>

                        <div className='col-sm-4 d-flex align-items-center part2 ps-4'>
                            <Button className='rounded-circle me-3'>
                                <IoMenu />
                            </Button>
                            <Search />
                        </div>

                        <div className="col-sm-6 d-flex align-items-center justify-content-end part3">
                            {/* Additional content can be added here */}
                            <Button className='rounded-circle me-3'>
                                <BsBrightnessLow />
                            </Button>

                            <Button className='rounded-circle me-3'>
                                <FaOpencart />
                            </Button>

                            <Button className='rounded-circle me-3'>
                                <IoMailOutline />
                            </Button>

                            <div className="dropdownWrapper">
                                <Button className='rounded-circle me-3' onClick={handleOpenNotifications}>
                                    <IoNotificationsOutline />
                                </Button>

                                <Menu
                                    anchorEl={notificationsAnchorEl}
                                    id="notifications"
                                    className='notificationMenu dropdown_list position-absolute'
                                    open={openNotification}
                                    onClose={handleCloseNotifications}
                                    onClick={handleCloseNotifications}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                borderRadius: '20px',
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                    borderRadius: '40px',
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: '50%',
                                                    transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                                >
                                    <div className="head ps-3 pb-0 pt-2">
                                        <h4>Orders (12)</h4>
                                    </div>

                                    <Divider className='mb-1' />

                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseNotifications}>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>
                                                                Olamide Joseph
                                                            </b>
                                                            added to his favourite list {' '}
                                                            <b>
                                                                Leather belt steve madden
                                                            </b>
                                                        </span>
                                                    </h4>

                                                    <p className='text-sky mb-0'>
                                                        2 mins ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotifications}>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>
                                                                Olamide Joseph
                                                            </b>
                                                            added to his favourite list {' '}
                                                            <b>
                                                                Leather belt steve madden
                                                            </b>
                                                        </span>
                                                    </h4>

                                                    <p className='text-sky mb-0'>
                                                        2 mins ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotifications}>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>
                                                                Olamide Joseph
                                                            </b>
                                                            added to his favourite list {' '}
                                                            <b>
                                                                Leather belt steve madden
                                                            </b>
                                                        </span>
                                                    </h4>

                                                    <p className='text-sky mb-0'>
                                                        2 mins ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotifications}>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>
                                                                Olamide Joseph
                                                            </b>
                                                            added to his favourite list {' '}
                                                            <b>
                                                                Leather belt steve madden
                                                            </b>
                                                        </span>
                                                    </h4>

                                                    <p className='text-sky mb-0'>
                                                        2 mins ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotifications}>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>
                                                                Olamide Joseph
                                                            </b>
                                                            added to his favourite list {' '}
                                                            <b>
                                                                Leather belt steve madden
                                                            </b>
                                                        </span>
                                                    </h4>

                                                    <p className='text-sky mb-0'>
                                                        2 mins ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotifications}>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>
                                                                Olamide Joseph
                                                            </b>
                                                            added to his favourite list {' '}
                                                            <b>
                                                                Leather belt steve madden
                                                            </b>
                                                        </span>
                                                    </h4>

                                                    <p className='text-sky mb-0' >
                                                        2 mins ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotifications}>
                                            <div className="d-flex ">
                                                <div className="">
                                                    <div className="userImg">
                                                        <span className='rounded-circle'>
                                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>
                                                                Olamide Joseph
                                                            </b>
                                                            added to his favourite list {' '}
                                                            <b>
                                                                Leather belt steve madden
                                                            </b>
                                                        </span>
                                                    </h4>

                                                    <p className='text-sky mb-0'>
                                                        2 mins ago
                                                    </p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>

                                    <div className="ps-3 pe-3 pt-2 pb-1 w-100 text-center rounded-4">
                                        <Button className='btn-purple w-100'>
                                            View All Notifications
                                        </Button>
                                    </div>
                                </Menu>
                            </div>

                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center " onClick={handleOpenAcc}>
                                    <div className="userImg">
                                        <span className='rounded-circle'>
                                            <img src="https://th.bing.com/th/id/R.5dc0311806d51ad8c9a59fad1c4c009f?rik=TypsNFTAeg23OQ&pid=ImgRaw&r=0" alt="" />
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h4>
                                            Olamide Joseph
                                        </h4>

                                        <p className='mb-0'>
                                            Admin
                                        </p>
                                    </div>
                                </Button>

                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMyAcc}
                                    onClose={handleCloseAcc}
                                    onClick={handleCloseAcc}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                borderRadius: '20px',
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                    borderRadius: '20px',
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) translateX(-1250%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <Divider />
                                    <MenuItem onClick={handleCloseAcc}>
                                        <ListItemIcon>
                                            <MdPerson fontSize="small" />
                                        </ListItemIcon>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseAcc}>
                                        <ListItemIcon>
                                            <FaUserShield fontSize="small" />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseAcc}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>

                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
