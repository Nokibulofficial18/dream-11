import './css/Banner.css'
import banner_image from '../assets/banner-main.png'
const Banner = ({coinAdd}) => {
    return (
        <div className='banner-bg mb-10 rounded-lg bg-black h-fit mx-auto p-8 lg:p-14 text-white'>
            <div className='flex flex-col gap-5 lg:gap-7 justify-center items-center'>
                <img src={banner_image} alt="" className='w-fit h-fit'/>
                <h1 className='text-center font-bold text-2xl lg:text-4xl'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className='font-medium text-[#FFFFFFB3] text-xl lg:text-2xl'>
                Beyond Boundaries Beyond Limits
                </p>
                <div className='border-2  rounded-2xl'>
                    <button onClick={()=>coinAdd(8000000)} className='bg-[#E7FE29] text-black font-bold px-4 py-3 rounded-lg shadow-md'>
                        Claim Free Credit
                    </button>
                </div>
            </div>            
        </div>
    );
};

export default Banner;