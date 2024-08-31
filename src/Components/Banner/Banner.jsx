import BannerImage from "../../assets/image.png";

function Banner() {
    return (
        <div className="w-full h-[25rem] relative">

            <img 
                src={BannerImage}
                className="h-full w-full"
            />

            <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
                <div className="flex flex-col gap-4">

                    <div className="font-semibold text-5xl text-white">
                        Crypto Tracker
                    </div>

                    <div className="font-bold text-sm text-white text-center">
                        Get all info regarding cryptocurrencies
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Banner;




// import BannerImage from '../../assets/image.png'

// function Banner() {
//     return (
//         <>
//             <div className='relative text-white'>
//                 <img src={BannerImage}
//                     className=''
//                 />


//                 <div className='absolute flex flex-col top-20 left-[3%] gap-3'>
//                     <div className='m-20'>
//                         <h1 className='text-5xl text font-bold '>Crypto Currency Tracker App</h1>
//                     </div>
//                     <div className='ml-20 text-2xl font-semibold'>
//                         Get all the information regarding the Crypto Currencies.
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Banner