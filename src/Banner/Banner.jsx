import BannerImage from '../assets/bannerImg.webp'

function Banner() {
    return (
        <>
            <div className='relative text-white'>
                <img src={BannerImage}
                    className=''
                />


                <div className='absolute flex flex-col top-20 left-[3%] gap-3'>
                    <div className='m-20'>
                        <h1 className='text-5xl text font-bold '>Crypto Currency Tracker App</h1>
                    </div>
                    <div className='ml-20 text-2xl font-semibold'>
                        Get all the information regarding the Crypto Currencies.
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner