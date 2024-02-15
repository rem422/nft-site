import { Link } from 'react-scroll'
import { navLinks } from '../Constants/Constants'
import { FiMenu, FiX} from "react-icons/fi";
import Button from "../Button/Button";
import {useState} from "react";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    };

    return (
        <nav className='bg-white fixed top-0 left-0 w-full py-[1rem] z-[999]'>
            <div className="max-container">
                <div className='flex flex-1 items-center justify-between'>
                    <div>
                        <Link to={'home'} className='text-2xl text-blue-900 font-bold'>NftSite</Link>
                    </div>
                    <div className={toggle ? "nav_overlay active" : undefined} onClick={handleToggle}/>
                    <ul className='flex items-center gap-16 max-lg:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <Link to={item.href}
                                      className={'text-[1.2rem] hover:text-gray-700 transition-all duration-150'}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center gap-5 max-lg:hidden'>
                        <Button
                            label={'Get Started'}
                        />
                        <Button
                            label={'Login'}
                            customStyle={'bg-transparent text-xl text-black border-none hover:text-gray-400'}

                        />
                    </div>
                    <div className='text-3xl mt-1 ml-2 hidden max-lg:block cursor-pointer' onClick={handleToggle}>
                        {toggle ? <FiX/> : <FiMenu/>}
                    </div>
                    {/*  MOBILE MENU  */}
                    <ul className={toggle ? 'navbar active' : 'navbar'}>
                        {navLinks.map((item) => (
                            <li key={item.label} className='mt-[2rem]'>
                                <Link to={item.href}
                                      className={'text-[1.2rem] hover:text-slate-gray transition-all duration-150'}
                                      onClick={handleToggle}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <div className='flex items-start flex-col gap-0 mt-[4rem]'>
                            <Button
                                label={'Get Started'}
                            />
                            <Button
                                label={'Login'}
                                customStyle={'bg-transparent text-xl text-black border-none hover:text-gray-400'}
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
