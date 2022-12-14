import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import ActiveTabState from '../../../atoms/ActiveTabState'

const NavItems = ({ link }) => {

    const [clicked, setClicked] = useRecoilState(ActiveTabState)

    return (
        <Link to={link.url}
            onClick={() => setClicked(link.id)}
            key={link.id}
            className='w-full flex items-center justify-start space-x-6 px-6 cursor-pointer'>
            <span>
                {link.icon}
            </span>
            <h1
                className={`text-white text-xl hover:text-[#37DE8F] md:flex hidden ${clicked === link.id && 'text-[#37DE8F] font-extrabold'}`}>
                {link.title}
            </h1>
        </Link>
    )
}

export default NavItems