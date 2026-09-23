import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="container mx-auto border-t border-gray-200 mt-20 sm:mt-32 lg:mt-50">
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 px-6 sm:px-8 py-10 sm:py-12 mt-6">

   
                <div className="flex flex-col gap-2 items-center text-center lg:items-start lg:text-left sm:col-span-2 lg:col-span-1">
                    <img src={logo} alt="DevStack" className="w-35" />

                    <p className="text-sm sm:text-base text-gray-600">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <div className="flex gap-6 mt-2">
                        <a href="">GitHub</a>
                        <a href="">Twitter</a>
                        <a href="">LinkedIn</a>
                    </div>
                </div>


                <div className="flex flex-col gap-2">
                    <h3 className="mb-2 font-semibold">PRODUCT</h3>
                    <a href="">Home</a>
                    <a href="">Technologies</a>
                    <a href="">Projects</a>
                </div>


                <div className="flex flex-col gap-2">
                    <h3 className="mb-2 font-semibold">COMPANY</h3>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Careers</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="mb-2 font-semibold">LEGAL</h3>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                </div>
            </div>


            <div className="border-t border-gray-200 mt-4 sm:mt-10 px-6 sm:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center sm:text-left">
                <p>© 2026 Dev Stack. All rights reserved.</p>

                <div className="flex gap-5">
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;