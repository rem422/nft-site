import { aboutCards } from "../Constants/Constants.tsx";

const About = () => {
    return (
        <section id={'about'}>
            <div className="max-container">
                <div className='mb-6'>
                    <h2 className='text-3xl font-bold md:text-start text-center capitalize'>Best Sellers</h2>
                </div>
                <div className='flex justify-center items-center md:flex-row flex-col gap-5 flex-wrap mt-14'>
                    {aboutCards.map((card) => (
                        <div
                            key={card.userName}
                            className='flex items-center justify-start bg-white p-4 gap-6 shadow-xl w-full md:max-w-[300px] max-w-[400px] rounded-[20px]'
                        >
                            <div className='max-w-[80px]'>
                                <img src={card.userImg} alt={card.userName}/>
                            </div>
                            <div>
                                <h4 className='text-xl font-semibold'>{card.userName}</h4>
                                <div className='flex items-center gap-2 mt-1'>
                                    <img src={card.likeIcon} alt="" className='w-[20px]'/>
                                    <p>{card.userLikes}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default About
