import headerImg from '../../assets/header.png'
import Button from '../Button/Button'
import trolley from "../../assets/trolley.gif";
import  {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <header id={'home'}>
            <div className="max-container">
                <div className='flex flex-1 md:flex-row flex-col items-center justify-between md:gap-5 gap-10 pt-[8rem]'>
                    <div className='w-full max-w-[500px] gap-5' data-aos='fade-left' data-aos-offset='200' data-aos-delay='150'>
                        <h1 className='text-[3rem] md:text-[4rem] font-bold'>Let's Buy some <br/> <span className='text-blue-900'>NFTGraph</span></h1>
                        <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at atque cumque cupiditate exercitationem labore odio, odit quo? Accusamus aliquid, architecto consequatur distinctio esse itaque labore laborum minima quasi quos.</p>
                        <Button
                            label= 'Buy Now'
                            iconUrl= {trolley}
                            customStyle='rounded-full px-[1.4rem] text-white mt-[2rem]'
                        />
                    </div>
                    <div className='max-w-[700px]' data-aos='fade-right'  data-aos-offset='200' data-aos-delay='150'>
                        <img src={headerImg} alt="Hero image"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Hero
