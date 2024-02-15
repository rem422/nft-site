import {blogCards, btns} from "../Constants/Constants";


const Blog = () => {
    return (
        <section id={'blog'}>
            <div className="max-container">
                <div className='flex md:items-start md:justify-start items-center justify-center gap-5 flex-col mb-9'>
                    <h2 className='text-3xl capitalize font-semibold'>Super hot nFTs</h2>
                    <div className='flex items-center justify-center flex-wrap gap-3'>
                        {btns.map((btn) => (
                            <button
                                key={btn.label}
                                className='bg-gray-300 rounded-full py-2 px-4 hover:text-white hover:bg-blue-900 transition-all duration-300'
                                data-aos='fade-up' data-aos-offset='200' data-aos-delay='100'
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center items-center md:flex-row flex-col gap-5 flex-wrap'>
                    {blogCards.map((card) => (
                        <div
                            key={card.title}
                            className='bg-white shadow-xl p-5 rounded-[20px] gap-5 cursor-pointer hover:shadow-md transition-all duration-300'
                            data-aos='fade-up' data-aos-offset='200' data-aos-delay='100'
                        >
                            <div className='max-w-[300px]'>
                                <img
                                    src={card.cardImg}
                                    alt={card.title}
                                    className='rounded-[20px]'
                                />
                            </div>
                            <h3 className='font-semibold mt-4'>{card.title}</h3>
                            <div className='flex items-center justify-between my-4 gap-2'>
                                <div className='flex items-center gap-2 text-blue-600'>
                                   <p>{card.bitcoin}</p>
                                   <p className='text-[.8rem]'>{card.bitcoinRate}</p>
                                </div>
                                <p className='text-gray-500'>{card.page}</p>
                            </div>
                            <hr/>
                            <div className='flex items-center justify-between mt-2 gap-2'>
                                <button
                                    className='bg-gray-300 rounded-full py-1 px-3 text-[.8rem] hover:text-white hover:bg-blue-600 transition-all duration-300'
                                >{card.time}</button>
                                <p className='text-blue-600 font-semibold text-[.8rem]'>{card.bid}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center mt-14'>
                    <button
                        className='bg-gray-300 rounded-[10px] py-2 px-6 hover:text-white hover:bg-blue-600 transition-all duration-300'
                        data-aos='fade-up' data-aos-offset='200' data-aos-delay='100'
                    >
                        View More
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Blog
