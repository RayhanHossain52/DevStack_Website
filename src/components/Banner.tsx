import BannerLogo from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className="w-full mt-8">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-5">

                <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
                    <h2>
                        <span className="font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                            Build Your Ideal
                        </span>
                        <br />
                        <span className="text-brand-gradient font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                            Development Stack
                        </span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base">
                        Explore frontend, backend, database, and tooling options,
                        <br className="hidden lg:block" />
                        compare them side by side, and put together the stack that fits your
                        <br className="hidden lg:block" />
                        next project.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center lg:justify-start">
                        <button className="btn brand-gradient rounded-lg px-5 text-white">
                            Explore Technologies
                        </button>

                        <button className="btn rounded-lg px-5 text-gray-500">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-auto flex justify-center">
                    <img
                        src={BannerLogo}
                        alt="Development Stack"
                        className="w-64 sm:w-80 md:w-96 lg:w-140"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;