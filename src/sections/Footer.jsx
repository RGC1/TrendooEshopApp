// import logo from '../../assets/images/'



const Footer = () => {
    return ( 
        <footer id="footer" className="bg-[#222222] text-[#fff] py-16">
            <div className="container max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12">

                <div> 
                    <a href="/">
                     {/* <img src={logo} alt="" width={250} height={46} /> */}
                    </a>
                    <p className="mt-6 text-base leading-7 font-alegreya-bold text-white-400 sm:max-w-sm"> 
                    Trendoo
                    </p>
                </div>


 {/* Quick links  */}
                <div> 
                <h4 className="font-bold mb-8">Quick links</h4>
                <ul>
                    <li className="mb-3"><a href="">Home</a></li>
                    <li className="mb-3"><a href="">About Us</a></li>
                    <li className="mb-3"><a href="">Reviews</a></li>
                    <li className="mb-3"><a href="">Subscribe Now!</a></li>
                    <li className="mb-3"><a href="">Favourites</a></li>
                </ul>

                </div>


{/* Producs Gallery */}

                <div> 
                <h4 className="font-bold mb-8">Products Gallery</h4>
                <ul className="flex flex-wrap gap-4">
                    <li><a href="">Women Shop</a></li>
                    <li><a href="">Men Shop</a></li>
                    <li><a href="">New Arrivals</a></li>                   
                </ul>
                    
                </div>


{/* Contact us - Email, mobile, address */}
                <div> 

                <h4 className="font-bold mb-8">Contact us</h4>

                    <ul className="flex flex-col gap-6">
                    <li><span className="text-red-500 pr-2">Tel.</span>+440123 456 789</li>
                    <li><span className="text-red-500 pr-2">E.</span> info@trendoo.com</li>
                    <li><span className="text-red-500 pr-2">A.</span> Unit 7, 109, Charing Cross Rd, London, UK </li>

                    </ul>

                </div>

            </div>

        </footer>

    );

};

export default Footer;