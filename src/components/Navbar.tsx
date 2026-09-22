import logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className='container mx-auto py-5 flex justify-between items-center sticky top-0 z-50 bg-white'>
            
                <img src={logo} alt="" />

                <div className='flex gap-4 items-center text-gray-500 font-semibold'>
                    <a href="" className='text-[#DB2777]'>Home</a>
                    <a href="">Technologies</a>
                    <a href="">Projects</a>                       
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>

                <div className='flex'>
                    <button className="btn rounded-full bg-transparent border-transparent">Sign In</button>
                    <button className="btn btn-secondary rounded-full px-5">Sign Up</button>
                </div>
            
        </nav>
    );
};

export default Navbar;