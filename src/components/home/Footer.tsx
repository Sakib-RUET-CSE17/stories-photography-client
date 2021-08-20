import React from 'react';
import {GrFacebook,GrInstagram} from 'react-icons/gr'
import {SiGmail} from 'react-icons/si'
import {BiCopyright} from 'react-icons/bi'
import FooterCol from './FooterCol';

const Footer = () => {
    const aboutUs = [
        { name: "Dhaka and Tangail Based Photographer and Cinematographer", link: "/about" },
    ]
    const menu = [
        { name: "Privacy Policy", link: "/privacy" },
        { name: "Cookie Policy", link: "/cookie" },
        { name: "Orders Policy", link: "/orders-policy" },
        { name: "Terms & Condition", link: "/terms" },
        { name: "Career", link: "/career" },
    ]
    const contactUs = [
        { name: "Tangail Sadar, Tangail-1900, Bangladesh", link: "//google.com/map" },
        { name: "Email: sourov688@gmail.com", link: "//mail-to:sourov688@gmail.com" },
        { name: "Contact no: +880-1825-406921", link: "//tel:+8801825406921" },

    ]
    
    return (
        <footer className="footer__component clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About Us"} menuItems={aboutUs} />
                    <FooterCol key={2} menuTitle="Menu" menuItems={menu} />
                    <FooterCol key={3} menuTitle="Contact Us" menuItems={contactUs} />
                    <FooterCol key={4} menuTitle="Get in Touch" menuItems={[]}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com/storiesbybrothers"><GrFacebook className="icon" /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com/stories_by_brothers"><GrInstagram className="icon" /></a></li>
                            <li className="list-inline-item"><a href="mail-to:sourov688@gmail.com"><SiGmail className="icon" /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <a href="tel:+8801825406921"><button className="btn btn-primary">+880 1825406921</button></a>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                <p><BiCopyright/> Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;