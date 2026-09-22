import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="container mx-auto border-t border-gray-200 mt-50">
            <div className=" flex justify-between items-center px-8 py-12 mt-6">
                <div className="flex flex-col gap-2">
                    <img src={logo} alt="" className="w-35" />
                    <p>Curated tools, technologies, and resources for developers building <br /> modern software.</p>
                    <div className="flex gap-4 mt-2">
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
            <div className="border-t border-gray-200 mt-10 pt-6 flex justify-between text-sm text-gray-400">
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
