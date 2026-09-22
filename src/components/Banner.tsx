import BannerLogo from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <section className='w-full h-full mt-8'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex flex-col gap-8'>
                    <h2><span className='font-extrabold text-6xl'>Build Your Ideal</span><br /><span className='text-brand-gradient font-extrabold text-6xl'>Development Stack</span></h2>
                    <p className='text-gray-600'>Explore frontend, backend, database, and tooling options,<br />compare them side by side, and put together the stack that fits your<br />next project.</p>
                    <div className='flex gap-2 mt-2'>
                        <button className="btn brand-gradient rounded-lg p-5 text-white">Explore Technologies</button>
                        <button className="btn rounded-lg px-13 text-gray-500">Learn More</button>
                    </div>
                </div>
                <div>
                    <img src={BannerLogo} alt="" className='w-140'/>
                </div>
            </div>
        </section>
    );
};

export default Banner;