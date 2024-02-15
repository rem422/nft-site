import { footerLinks } from "../Constants/Constants.tsx";
import { Link } from 'react-scroll'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'

const Footer = () => {

    const currentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer className='bg-black py-20'>
            <div className="max-container">
                <div className="flex items-center lg:items-start  justify-center lg:justify-between lg:flex-row flex-col gap-8 lg:gap-3">
                    <div>
                        <h1 className='text-white font-bold md:text-4xl text-3xl capitalize text-center lg:text-start'>Create, Explore & collect <br/> abstract NFTs</h1>
                    </div>
                    <div
                        className='flex items-center justify-center flex-col lg:items-end lg:justify-end gap-8'
                    >
                        <ul className='flex items-center flex-wrap gap-8 justify-center'>
                            {footerLinks.map((link) => (
                                <li
                                    key={link.label}
                                >
                                    <Link to={link.href} className='text-gray-400 hover:text-white transition-all duration-300'>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex justify-center items-center gap-5'>
                            <Link
                                to={'/'}
                                className='text-white text-3xl hover:text-gray-500 transition-all duration-300'
                            >
                                {<FaInstagram />
                                }</Link>
                            <Link
                                to={'/'}
                                className='text-white text-3xl hover:text-gray-500 transition-all duration-300'
                            >
                                {<FaFacebook />}
                            </Link>
                            <Link
                                to={'/'}
                                className='text-white text-3xl hover:text-gray-500 transition-all duration-300'
                            >
                                {<FaGithub />}
                            </Link>
                        </div>
                        <div>
                            <p className='text-[.8rem] text-gray-500 capitalize'>Copyright &copy;{currentYear()}.All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
