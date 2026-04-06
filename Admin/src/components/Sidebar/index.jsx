import Button from '@mui/material/Button';
import { TbLayoutDashboardFilled } from "react-icons/tb"
import { FaAngleRight } from "react-icons/fa6";
import { TbSitemapFilled } from "react-icons/tb";
import { FaOpencart } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotifications } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const isOpenSubmenu = (i) => {
    setActiveTab(i);
    setIsToggleSubmenu((prev) => (activeTab === i ? !prev : true));
  }
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
              <span className='icon'>
                <TbLayoutDashboardFilled />
              </span>
              Dashboard
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
            <span className='icon'>
              <TbSitemapFilled />
            </span>
            Products
            <span className='arrow'>
              <FaAngleRight />
            </span>
          </Button>

          <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
            <ul className="submenu">
              <li>
                <Link to='#'>Product List</Link>
              </li>
              <li>
                <Link to='#'>Product View</Link>
              </li>
              <li>
                <Link to='#'>Product Upload</Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to='/orders'>
            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
              <span className='icon'>
                <FaOpencart />
              </span>
              Orders
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='#'>
            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
              <span className='icon'>
                <TbMessageCircle />
              </span>
              Messages
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>
              <span className='icon'>
                <MdNotifications />
              </span>
              Notifications
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => setActiveTab(5)}>
              <span className='icon'>
                <RiSettings4Fill />
              </span>
              Settings
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => setActiveTab(6)}>
              <span className='icon'>
                <TbLayoutDashboardFilled />
              </span>
              Dashboard
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => setActiveTab(7)}>
              <span className='icon'>
                <TbSitemapFilled />
              </span>
              Products
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => setActiveTab(8)}>
              <span className='icon'>
                <FaOpencart />
              </span>
              Orders
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => setActiveTab(9)}>
              <span className='icon'>
                <TbMessageCircle />
              </span>
              Messages
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`} onClick={() => setActiveTab(10)}>
              <span className='icon'>
                <MdNotifications />
              </span>
              Notifications
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <Button className={`w-100 ${activeTab === 11 ? 'active' : ''}`} onClick={() => setActiveTab(11)}>
              <span className='icon'>
                <RiSettings4Fill />
              </span>
              Settings
              <span className='arrow'>
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>
      </ul>

      <br />

      <div className="logoutWrapper">
        <div className='logoutBox'>
          <Button variant='contained' className='btn-purple'>Logout</Button>
        </div>
      </div>
    </div >
  )
}

export default Sidebar
