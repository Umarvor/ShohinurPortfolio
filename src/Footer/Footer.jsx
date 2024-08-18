import React from 'react';
import './Footer.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/material';
import { Facebook, InsertPageBreak, Instagram, Telegram, YouTube } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/image.png'
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  className='Logoo' src={Logo} alt="" />
                    <br />
                    <br />
                    <article>
                        <ul className='menu'>
                            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Bosh sahifa</li>
                            <li onClick={() => {
                               
                                window.scrollTo({ top: 10, behavior: 'smooth' });
                            }}>
                                O'zim haqimda
                            </li>
                            <li onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>Portfolio</li>
                            <li onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>IT sohasidagio'zgarishlar</li>


                        </ul>





                    </article>
                    <p className='footer-copyright'>© 2024 ShohinurPortfolio. Barcha huquqlar himoyalangan.</p>
                </div>
                <div className="footer-contact">
                    <br />
                    <a target='_blank' href="mailto:shohinurshahriyorov@gmail.com"><p><EmailIcon /> Email: info@shohinurshahriyorov@gmail.com</p></a>
                    <br />
                    <a href="tel:+998770270357"><p><PhoneIcon /> Telefon: +998 77 027 03 57</p></a>
                    <br />
                    <p className='footer-location'><LocationOnIcon /> Manzil: Uzbekistan Qashqadoryo Kitob tuman Varganza Mfy</p>
                    <br />
                    <article className='grid'>
                        <a target='_blank' href="https://t.me/Shohinur_707"><p> <Telegram /></p></a>
                        <a target='_blank' href="https://www.youtube.com/@ShohinurShahriyorov"><p> <YouTube /></p></a>
                        <a target='_blank' href="https://www.facebook.com/watch/hashtag/varganza/"><p> <Facebook /></p></a>
                        <a target='_blank' href="https://www.instagram.com/Shohinur_206"><p> <Instagram /></p></a>
                    </article>

                </div>
                <div className="footer-map">
                    <iframe
                        title="Varganza Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3317475854027!2d69.24407421542197!3d41.299495979271264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4bb3f1e3f71%3A0x9b1e3b0f8b1b6ad7!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1613972246319!5m2!1sen!2sus"

                        style={{ border: 0 }}

                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}
