import { featuresCard } from "../Constants/Constants.tsx";

const Features = () => {
    return (
        <section id='features'>
            <div className="max-container">
                <div className='mb-6'>
                    <h2 className='text-3xl font-bold md:text-start text-center capitalize'>Sell your NFTs</h2>
                </div>
                <div className='flex items-center justify-around md:flex-row flex-col gap-5'>
                    {featuresCard.map((item) =>(
                        <div className='bg-white shadow-xl w-full max-w-[600px] py-6 px-4 rounded-[20px] hover:shadow-md transition-all duration-300 cursor-pointer' data-aos='fade-up' data-aos-offset='200' data-aos-delay='100'>
                            <div key={item.title} className='flex items-center gap-2 font-semibold'>
                                {item.icon}
                                <h4>{item.title}</h4>
                            </div>
                            <p className='mt-5'>{item.info}</p>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}
export default Features
