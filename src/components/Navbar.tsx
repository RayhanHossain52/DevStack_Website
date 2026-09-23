import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto py-5 px-4 flex justify-between items-center">


                <button className="lg:hidden text-2xl">
                    <RxHamburgerMenu />

                </button>


                <img src={logo} alt="DevStack" className="w-32 lg:w-auto" />

                {/* Navigation Links - Large Devices */}
                <div className="hidden lg:flex gap-4 items-center text-gray-500 font-semibold">
                    <a href="" className="text-[#DB2777]">Home</a>
                    <a href="">Technologies</a>
                    <a href="">Projects</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>


                <div className="flex">
                    <button className="btn btn-sm lg:btn-md rounded-full bg-transparent border-transparent">
                        Sign In
                    </button>

                    <button className="btn btn-sm lg:btn-md btn-secondary rounded-full px-3 lg:px-5">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;