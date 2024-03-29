import headerImg from '../../assets/header.png'
import Button from '../Button/Button'
import trolley from "../../assets/trolley.gif";

const Hero = () => {
    return (
        <header id={'home'}>
            <div className="max-container">
                <div className='flex flex-1 md:flex-row flex-col items-center justify-between md:gap-5 gap-10 pt-[8rem]'>
                    <div className='w-full max-w-[500px] gap-5'>
                        <h1 className='text-[3rem] md:text-[4rem] font-bold'>Let's Buy some <br/> <span className='text-blue-900'>NFTGraph</span></h1>
                        <p className='my-5'>Our vision is to empower brands & creators to launch their digital products & to cultivate vibrant and sustainable communities. Let's build, innovate, & lead the way in ushering the next million people into web3, together. </p>
                        <Button
                            label= 'Buy Now'
                            iconUrl= {trolley}
                            customStyle='rounded-full px-[1.4rem] text-white mt-[2rem]'
                        />
                    </div>
                    <div className='max-w-[700px]'>
                        <img src={headerImg} alt="Hero image"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Hero
