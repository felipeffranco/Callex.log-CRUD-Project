import { ImHome3 } from 'react-icons/im'
import { IoInformationCircleSharp } from 'react-icons/io5'
import { TbBrandCodesandbox } from 'react-icons/tb'
import { FaHandHolding } from 'react-icons/fa'

const NavDB = [
    {
        id: 0,
        title: "Home",
        url: "/",
        icon: <ImHome3 className="nav-icon" />,
    },
    {
        id: 1,
        title: "About us",
        url: "/about-us",
        icon: <IoInformationCircleSharp className="nav-icon" />,
    },
    {
        id: 2,
        title: "Containers",
        url: "/containers",
        icon: <TbBrandCodesandbox className="nav-icon" />,
    },
    {
        id: 3,
        title: "Services",
        url: "/services",
        icon: <FaHandHolding className="nav-icon" />,
    },
];

export default NavDB