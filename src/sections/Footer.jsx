import logo from '../assets/images/Trendoo.png'

const Footer = () => {
    return ( 
        <footer id="footer" className="bg-[#e4cbcb] py-16">
            <div className="container max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12">

                <div> 
                    <a href="/">
                     {/* <img src={logo} alt="" width={250} height={46} /> */}
                    </a>
                    <a href="/" className="flex items-center">
                <img src={logo} alt="logo" height={221} width={221} />
              </a>
                </div>


 {/* Quick links  */}
 <div>
  <h4 className="font-bold mb-8">QUICK LINKS</h4>
  <ul>
    <li className="mb-3"><a href="" className="no-underline text-black">Home</a></li>
    <li className="mb-3"><a href="" className="no-underline text-black">About Us</a></li>
    <li className="mb-3"><a href="" className="no-underline text-black">Reviews</a></li>
    <li className="mb-3"><a href="" className="no-underline text-black">Subscribe Now!</a></li>
    <li className="mb-3"><a href="" className="no-underline text-black">Favourites</a></li>
  </ul>
</div>



{/* Producs Gallery */}

<div>
  <h4 className="font-bold mb-8">PRODUCTS GALLERY</h4>
  <ul className="flex flex-wrap gap-4">
    <li><a href="#sectionWomen" className="link-style text-black" style={{textDecoration: 'none'}}>Women Shop</a></li>
    <li><a href="#sectionMen" className="link-style text-black" style={{textDecoration: 'none'}}>Men Shop</a></li>
    <li><a href="#sectionMostPopular" className="link-style text-black" style={{textDecoration: 'none'}}>Most Popular</a></li>
  </ul>
</div>



{/* Contact us - Email, mobile, address */}
<div>
  <h4 className="font-bold mb-8">CONTACT US</h4>
  <ul className="flex flex-col gap-6 ">
    <li><a href="tel:+440123456789" className=" pr-2 text-black" style={{textDecoration: 'none'}}>Tel. +440123 456 789</a></li>
    <li><a href="mailto:info@trendoo.com" className=" pr-2 text-black" style={{textDecoration: 'none'}}>E. info@trendoo.com</a></li>
    <li className=""><span className="pr-2">A.</span> Unit 7, 109, Charing Cross Rd, London, UK</li>
  </ul>
</div>


            </div>

        </footer>

    );

};

export default Footer;